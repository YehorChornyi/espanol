import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RichTextView } from '../../../../components/rich-text/rich-text';
import { Mistake } from '../../../../interfaces/mistake.interface';

@Component({
  selector: 'app-mistakes-table',
  imports: [RichTextView],
  templateUrl: './mistakes-table.html',
  styleUrl: './mistakes-table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MistakesTable {
  readonly mistakes = input.required<Mistake[]>();
}
