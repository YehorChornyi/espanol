import { ChangeDetectionStrategy, Component, ElementRef, inject, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarState } from '../../services/sidebar-state';

@Component({
  selector: 'app-top-bar',
  imports: [RouterLink],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBar {
  protected readonly sidebar = inject(SidebarState);

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly toggleButton = viewChild.required<ElementRef<HTMLButtonElement>>('toggle');

  /** Rendered height, used to offset in-page anchor scrolling below the sticky bar. */
  get height(): number {
    return this.host.offsetHeight;
  }

  focusToggle(): void {
    this.toggleButton().nativeElement.focus();
  }
}
