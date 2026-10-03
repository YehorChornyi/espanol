import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ContentTable } from '../../../../components/content-table/content-table';
import { RichTextView } from '../../../../components/rich-text/rich-text';
import { IrregularGroup } from '../../../../interfaces/irregular-group.interface';

@Component({
  selector: 'app-irregular-group',
  imports: [ContentTable, RichTextView],
  templateUrl: './irregular-group.html',
  styleUrl: './irregular-group.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IrregularGroupView {
  readonly group = input.required<IrregularGroup>();
}
