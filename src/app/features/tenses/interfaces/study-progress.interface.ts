import { TenseId } from '../types/tense-id.types';

export interface StudyProgress {
  /** Oldest pin first. */
  pinned: TenseId[];
  learned: TenseId[];
}
