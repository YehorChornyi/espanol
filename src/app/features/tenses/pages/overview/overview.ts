import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RichTextView } from '../../components/rich-text/rich-text';
import { DECISION_GUIDE } from '../../properties/decision-guide.properties';
import { TenseContent } from '../../services/tense-content';

@Component({
  selector: 'app-overview',
  imports: [RouterLink, RichTextView],
  templateUrl: './overview.html',
  styleUrl: './overview.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Overview {
  private readonly content = inject(TenseContent);

  protected readonly catalogue = this.content.catalogue;
  protected readonly steps = DECISION_GUIDE.map((step) => ({
    ...step,
    name: this.content.summary(step.tenseId)?.name ?? step.tenseId,
  }));
  protected readonly count = computed(() => this.catalogue.length);
}
