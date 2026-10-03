import { Example } from '../interfaces/example.interface';
import { RichText } from './rich-text.types';

export interface ParagraphBlock {
  type: 'paragraph';
  text: RichText;
}

export interface TableBlock {
  type: 'table';
  caption?: string;
  headers: RichText[];
  rows: RichText[][];
  /** First column holds person labels (yo, tú, …) rendered as row headers. */
  persons?: boolean;
}

export interface ListBlock {
  type: 'list';
  items: RichText[];
}

export interface ExamplesBlock {
  type: 'examples';
  items: Example[];
}

export interface NoteBlock {
  type: 'note';
  tone: 'tip' | 'warning';
  text: RichText;
}

export type ContentBlock = ParagraphBlock | TableBlock | ListBlock | ExamplesBlock | NoteBlock;
