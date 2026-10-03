import { TenseSummary } from '../interfaces/tense-summary.interface';
import { TENSE_CATALOGUE } from '../properties/tense-catalogue.properties';
import { TenseId } from '../types/tense-id.types';

export interface AdjacentTenses {
  previous?: TenseSummary;
  next?: TenseSummary;
}

/** Neighbours in the default (teaching) order. From the overview (`null`), "next" is the first tense. */
export function adjacentTenses(id: TenseId | null): AdjacentTenses {
  const index = id === null ? -1 : TENSE_CATALOGUE.findIndex((tense) => tense.id === id);
  return {
    previous: index > 0 ? TENSE_CATALOGUE[index - 1] : undefined,
    next: TENSE_CATALOGUE[index + 1],
  };
}
