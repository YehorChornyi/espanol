import { DOCUMENT, ViewportScroller } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  Injector,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { isTenseId } from '../../helpers/tense-id.helper';
import { adjacentTenses } from '../../helpers/tense-navigation.helper';
import { SidebarState } from '../../services/sidebar-state';
import { BottomBar } from '../bottom-bar/bottom-bar';
import { Sidebar } from '../sidebar/sidebar';
import { TopBar } from '../top-bar/top-bar';

/** Horizontal distance (px) a leftward swipe must travel to close the drawer. */
const SWIPE_CLOSE_DISTANCE = 60;

/**
 * Top bar + collapsible sidebar (inline on wide screens, drawer on narrow) + routed content.
 * On narrow screens a bottom bar keeps the menu and previous/next tense within thumb reach.
 */
@Component({
  selector: 'app-tenses-layout',
  imports: [RouterOutlet, TopBar, Sidebar, BottomBar],
  templateUrl: './tenses-layout.html',
  styleUrl: './tenses-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown.escape)': 'closeDrawer()' },
})
export class TensesLayout {
  protected readonly sidebar = inject(SidebarState);

  private readonly router = inject(Router);
  private readonly injector = inject(Injector);
  private readonly topbar = viewChild.required(TopBar);
  private readonly panel = viewChild.required<ElementRef<HTMLElement>>('panel');
  private touchStart: { x: number; y: number } | null = null;

  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.router.url),
    ),
    { initialValue: this.router.url },
  );

  /** The open tense, or `null` on the overview. */
  protected readonly currentTenseId = computed(() => {
    const slug = this.url().split(/[?#]/)[0].split('/').filter(Boolean).pop();
    return isTenseId(slug) ? slug : null;
  });
  protected readonly adjacent = computed(() => adjacentTenses(this.currentTenseId()));

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(inject(DestroyRef)),
      )
      .subscribe(() => this.sidebar.closeDrawer());

    // In-page anchors (section chips) must land below the sticky top bar.
    inject(ViewportScroller).setOffset(() => [0, this.topbar().height + 12]);

    // Move focus into the drawer when it opens on narrow screens.
    effect(() => {
      if (this.sidebar.isNarrow() && this.sidebar.drawerOpen()) {
        afterNextRender(
          () => this.panel().nativeElement.querySelector<HTMLElement>('a, button')?.focus(),
          { injector: this.injector },
        );
      }
    });

    // The page behind the open drawer must not scroll.
    const body = inject(DOCUMENT).body;
    effect(() =>
      body.classList.toggle(
        'is-scroll-locked',
        this.sidebar.isNarrow() && this.sidebar.drawerOpen(),
      ),
    );
    inject(DestroyRef).onDestroy(() => body.classList.remove('is-scroll-locked'));
  }

  protected closeDrawer(): void {
    if (this.sidebar.isNarrow() && this.sidebar.drawerOpen()) {
      this.sidebar.closeDrawer();
      this.topbar().focusToggle();
    }
  }

  protected onTouchStart(event: TouchEvent): void {
    const touch = event.touches[0];
    this.touchStart = touch ? { x: touch.clientX, y: touch.clientY } : null;
  }

  protected onTouchEnd(event: TouchEvent): void {
    const touch = event.changedTouches[0];
    if (!this.touchStart || !touch) {
      return;
    }
    const dx = touch.clientX - this.touchStart.x;
    const dy = touch.clientY - this.touchStart.y;
    this.touchStart = null;
    if (dx < -SWIPE_CLOSE_DISTANCE && Math.abs(dx) > Math.abs(dy)) {
      this.sidebar.closeDrawer();
    }
  }
}
