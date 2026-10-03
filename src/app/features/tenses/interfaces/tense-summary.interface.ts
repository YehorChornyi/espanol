import { TenseId } from '../types/tense-id.types';

export interface TenseSummary {
  id: TenseId;
  /** Spanish name, e.g. `Pretérito indefinido`. */
  name: string;
  /** Ukrainian hint, ≤ 30 chars, e.g. `закрите минуле`. */
  hint: string;
  /** yo form of hablar (`hablé`); Imperativo uses `habla (tú)`. */
  exampleYo: string;
  when: string;
  english: string;
  markers: string[];
}
