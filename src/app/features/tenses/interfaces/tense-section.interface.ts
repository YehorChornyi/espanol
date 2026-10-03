import { SectionKind } from '../enums/section-kind.enum';
import { ContentBlock } from '../types/content-block.types';
import { IrregularGroup } from './irregular-group.interface';

export interface TenseSection {
  kind: SectionKind;
  title: string;
  blocks: ContentBlock[];
  /** Only for `SectionKind.Irregular`. */
  groups?: IrregularGroup[];
}
