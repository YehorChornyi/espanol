import { Injectable } from '@angular/core';
import { Tense } from '../interfaces/tense.interface';
import { TenseSummary } from '../interfaces/tense-summary.interface';
import { TENSE_CATALOGUE } from '../properties/tense-catalogue.properties';
import { TENSE_LOADERS } from '../properties/tense-loaders.properties';
import { TenseId } from '../types/tense-id.types';

@Injectable({ providedIn: 'root' })
export class TenseContent {
  readonly catalogue = TENSE_CATALOGUE;

  private readonly byId = new Map(TENSE_CATALOGUE.map((tense) => [tense.id, tense]));

  summary(id: TenseId): TenseSummary | undefined {
    return this.byId.get(id);
  }

  load(id: TenseId): Promise<Tense> {
    return TENSE_LOADERS[id]();
  }
}
