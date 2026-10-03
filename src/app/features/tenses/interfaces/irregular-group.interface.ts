import { TableBlock } from '../types/content-block.types';
import { RichText } from '../types/rich-text.types';

export interface IrregularGroup {
  title: string;
  rule: RichText;
  table: TableBlock;
}
