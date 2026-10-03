import { RichText } from '../types/rich-text.types';

export interface Mistake {
  wrong: string;
  right: RichText;
  why: string;
}
