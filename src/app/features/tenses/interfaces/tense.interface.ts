import { TenseId } from '../types/tense-id.types';
import { RichText } from '../types/rich-text.types';
import { Mistake } from './mistake.interface';
import { SelfCheckItem } from './self-check-item.interface';
import { TenseSection } from './tense-section.interface';

export interface Tense {
  id: TenseId;
  intro: RichText;
  formula: RichText;
  sections: TenseSection[];
  mistakes: Mistake[];
  selfCheck: SelfCheckItem[];
}
