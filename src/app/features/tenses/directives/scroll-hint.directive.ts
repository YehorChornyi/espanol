import { afterNextRender, DestroyRef, Directive, ElementRef, inject, signal } from '@angular/core';

/**
 * Marks a horizontally scrollable container with `has-more-left` / `has-more-right` so CSS can
 * fade the edge that hides more columns — the cue that a table can be swiped sideways.
 */
@Directive({
  selector: '[appScrollHint]',
  host: {
    '[class.has-more-left]': 'moreLeft()',
    '[class.has-more-right]': 'moreRight()',
    '(scroll)': 'update()',
  },
})
export class ScrollHint {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  protected readonly moreLeft = signal(false);
  protected readonly moreRight = signal(false);

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      this.update();
      if (typeof ResizeObserver !== 'undefined') {
        const observer = new ResizeObserver(() => this.update());
        observer.observe(this.element);
        destroyRef.onDestroy(() => observer.disconnect());
      }
    });
  }

  protected update(): void {
    const { scrollLeft, scrollWidth, clientWidth } = this.element;
    this.moreLeft.set(scrollLeft > 1);
    this.moreRight.set(scrollLeft + clientWidth < scrollWidth - 1);
  }
}
