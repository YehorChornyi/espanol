import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  resource,
} from '@angular/core';
import { ContentTable } from '../../components/content-table/content-table';
import { RichTextView } from '../../components/rich-text/rich-text';
import { adjacentTenses } from '../../helpers/tense-navigation.helper';
import { StudyProgress } from '../../services/study-progress';
import { TenseContent } from '../../services/tense-content';
import { TenseId } from '../../types/tense-id.types';
import { IrregularGroupView } from './components/irregular-group/irregular-group';
import { MistakesTable } from './components/mistakes-table/mistakes-table';
import { SectionNav } from './components/section-nav/section-nav';
import { SelfCheck } from './components/self-check/self-check';
import { TensePager } from './components/tense-pager/tense-pager';

@Component({
  selector: 'app-tense',
  imports: [
    ContentTable,
    SectionNav,
    TensePager,
    RichTextView,
    IrregularGroupView,
    MistakesTable,
    SelfCheck,
  ],
  templateUrl: './tense.html',
  styleUrl: './tense.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TensePage {
  /** Bound from the `:tenseId` route param; `tenseExistsGuard` guarantees it is valid. */
  readonly tenseId = input.required<TenseId>();

  private readonly content = inject(TenseContent);
  protected readonly progress = inject(StudyProgress);

  protected readonly summary = computed(() => this.content.summary(this.tenseId()));
  protected readonly tense = resource({
    params: () => this.tenseId(),
    loader: ({ params }) => this.content.load(params),
  });
  protected readonly adjacent = computed(() => adjacentTenses(this.tenseId()));
  protected readonly pinned = computed(() => this.progress.isPinned(this.tenseId()));
  protected readonly learned = computed(() => this.progress.isLearned(this.tenseId()));
}
