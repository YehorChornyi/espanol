import { TENSE_IDS, TenseId } from '../types/tense-id.types';

const IDS: ReadonlySet<string> = new Set(TENSE_IDS);

export function isTenseId(value: unknown): value is TenseId {
  return typeof value === 'string' && IDS.has(value);
}
