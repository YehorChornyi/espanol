import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TableBlock } from '../../types/content-block.types';
import { RichTextView } from '../rich-text/rich-text';

/** A table block inside a horizontally scrollable, keyboard-focusable region. */
@Component({
  selector: 'app-content-table',
  imports: [RichTextView],
  templateUrl: './content-table.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentTable {
  readonly block = input.required<TableBlock>();
  readonly label = input<string>();

  protected readonly regionLabel = computed(
    () => this.block().caption ?? this.label() ?? 'Таблиця',
  );
}
