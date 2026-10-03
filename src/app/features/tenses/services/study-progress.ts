import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { LocalStorage } from '../../../core/services/local-storage';
import { isTenseId } from '../helpers/tense-id.helper';
import { StudyProgress as StudyProgressState } from '../interfaces/study-progress.interface';
import { TenseSummary } from '../interfaces/tense-summary.interface';
import { TENSE_CATALOGUE } from '../properties/tense-catalogue.properties';
import { TenseId } from '../types/tense-id.types';

export const PROGRESS_STORAGE_KEY = 'espanol.progress.v1';

const EMPTY: StudyProgressState = { pinned: [], learned: [] };

function validIds(value: unknown): TenseId[] {
  return Array.isArray(value) ? [...new Set(value.filter(isTenseId))] : [];
}

function parseProgress(raw: unknown): StudyProgressState {
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
    return EMPTY;
  }
  const record = raw as Record<string, unknown>;
  return { pinned: validIds(record['pinned']), learned: validIds(record['learned']) };
}

/** Pinned ("вивчаю зараз") and learned tenses, persisted on the device. */
@Injectable({ providedIn: 'root' })
export class StudyProgress {
  private readonly storage = inject(LocalStorage);
  private readonly initial = this.storage.read(PROGRESS_STORAGE_KEY, parseProgress, EMPTY);

  /** Oldest pin first. */
  readonly pinned = signal<TenseId[]>(this.initial.pinned);
  readonly learned = signal<ReadonlySet<TenseId>>(new Set(this.initial.learned));

  readonly pinnedTenses = computed<TenseSummary[]>(() =>
    this.pinned()
      .map((id) => TENSE_CATALOGUE.find((tense) => tense.id === id))
      .filter((tense): tense is TenseSummary => tense !== undefined),
  );

  readonly otherTenses = computed<TenseSummary[]>(() => {
    const pinned = new Set(this.pinned());
    return TENSE_CATALOGUE.filter((tense) => !pinned.has(tense.id));
  });

  constructor() {
    effect(() => {
      this.storage.write(PROGRESS_STORAGE_KEY, {
        pinned: this.pinned(),
        learned: [...this.learned()],
      } satisfies StudyProgressState);
    });
  }

  isPinned(id: TenseId): boolean {
    return this.pinned().includes(id);
  }

  isLearned(id: TenseId): boolean {
    return this.learned().has(id);
  }

  togglePinned(id: TenseId): void {
    this.pinned.update((pinned) =>
      pinned.includes(id) ? pinned.filter((pinnedId) => pinnedId !== id) : [...pinned, id],
    );
  }

  toggleLearned(id: TenseId): void {
    this.learned.update((learned) => {
      const next = new Set(learned);
      if (!next.delete(id)) {
        next.add(id);
      }
      return next;
    });
  }
}
