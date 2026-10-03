import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { parseRichText, splitEndings } from '../../helpers/rich-text.helper';
import { RichText } from '../../types/rich-text.types';

/** Renders `**strong**` / `*em*` markup as elements; never uses innerHTML. */
@Component({
  selector: 'app-rich-text',
  imports: [NgTemplateOutlet],
  templateUrl: './rich-text.html',
  styleUrl: './rich-text.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RichTextView {
  readonly text = input.required<RichText>();

  protected readonly segments = computed(() =>
    parseRichText(this.text()).map((segment) => ({
      ...segment,
      parts: splitEndings(segment.text),
    })),
  );
}
