import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  Injector,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { SidebarState } from '../../services/sidebar-state';
import { Sidebar } from '../sidebar/sidebar';

/** Top bar + collapsible sidebar (inline on wide screens, drawer on narrow) + routed content. */
@Component({
  selector: 'app-tenses-layout',
  imports: [RouterOutlet, RouterLink, Sidebar],
  templateUrl: './tenses-layout.html',
  styleUrl: './tenses-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown.escape)': 'closeDrawer()' },
})
export class TensesLayout {
  protected readonly sidebar = inject(SidebarState);

  private readonly injector = inject(Injector);
  private readonly toggleButton = viewChild.required<ElementRef<HTMLButtonElement>>('toggle');
  private readonly panel = viewChild.required<ElementRef<HTMLElement>>('panel');

  constructor() {
    inject(Router)
      .events.pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(inject(DestroyRef)),
      )
      .subscribe(() => this.sidebar.closeDrawer());

    // Move focus into the drawer when it opens on narrow screens.
    effect(() => {
      if (this.sidebar.isNarrow() && this.sidebar.drawerOpen()) {
        afterNextRender(
          () => this.panel().nativeElement.querySelector<HTMLElement>('a, button')?.focus(),
          { injector: this.injector },
        );
      }
    });
  }

  protected closeDrawer(): void {
    if (this.sidebar.isNarrow() && this.sidebar.drawerOpen()) {
      this.sidebar.closeDrawer();
      this.toggleButton().nativeElement.focus();
    }
  }
}
