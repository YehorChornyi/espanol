import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ScrollHint } from '../../directives/scroll-hint.directive';
import { TableBlock } from '../../types/content-block.types';
import { RichTextView } from '../rich-text/rich-text';

/** Cells up to this many characters (forms, endings) are kept on one line. */
const NOWRAP_MAX_LENGTH = 18;

/** A table block inside a horizontally scrollable, keyboard-focusable region. */
@Component({
  selector: 'app-content-table',
  imports: [RichTextView, ScrollHint],
  templateUrl: './content-table.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentTable {
  readonly block = input.required<TableBlock>();
  readonly label = input<string>();

  protected readonly regionLabel = computed(
    () => this.block().caption ?? this.label() ?? 'Таблиця',
  );

  protected isShort(cell: string): boolean {
    return cell.replace(/\*/g, '').length <= NOWRAP_MAX_LENGTH;
  }
}
