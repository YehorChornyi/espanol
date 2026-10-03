import { RichText } from '../types/rich-text.types';
import { TenseId } from '../types/tense-id.types';

export interface DecisionStep {
  question: string;
  tenseId: TenseId;
  example: RichText;
}
