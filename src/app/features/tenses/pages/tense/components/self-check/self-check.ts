import { ChangeDetectionStrategy, Component, computed, input, linkedSignal } from '@angular/core';
import { RichTextView } from '../../../../components/rich-text/rich-text';
import { SelfCheckItem } from '../../../../interfaces/self-check-item.interface';

/** Exercises whose answers stay hidden until revealed; state resets when the items change. */
@Component({
  selector: 'app-self-check',
  imports: [RichTextView],
  templateUrl: './self-check.html',
  styleUrl: './self-check.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelfCheck {
  readonly items = input.required<SelfCheckItem[]>();

  protected readonly revealed = linkedSignal<SelfCheckItem[], ReadonlySet<number>>({
    source: this.items,
    computation: () => new Set(),
  });

  protected readonly allRevealed = computed(() => this.revealed().size === this.items().length);

  protected toggle(index: number): void {
    this.revealed.update((revealed) => {
      const next = new Set(revealed);
      if (!next.delete(index)) {
        next.add(index);
      }
      return next;
    });
  }

  protected toggleAll(): void {
    this.revealed.set(this.allRevealed() ? new Set() : new Set(this.items().keys()));
  }
}
