import { TextSegment } from '../interfaces/text-segment.interface';
import { RichText } from '../types/rich-text.types';

const MARKUP = /\*\*([^*]+)\*\*|\*([^*]+)\*/g;

/** Splits `**strong**` / `*em*` markup into segments; unmatched markers stay as literal text. */
export function parseRichText(text: RichText): TextSegment[] {
  const segments: TextSegment[] = [];
  let last = 0;
  for (const match of text.matchAll(MARKUP)) {
    const index = match.index ?? 0;
    if (index > last) {
      segments.push({ text: text.slice(last, index), strong: false, em: false });
    }
    if (match[1] !== undefined) {
      segments.push({ text: match[1], strong: true, em: false });
    } else {
      segments.push({ text: match[2], strong: false, em: true });
    }
    last = index + match[0].length;
  }
  if (last < text.length) {
    segments.push({ text: text.slice(last), strong: false, em: false });
  }
  return segments;
}

export interface TextPart {
  text: string;
  /** Endings like `-imos` must not break after their hyphen. */
  nowrap: boolean;
}

const ENDING = /-\p{L}+/gu;

/** Splits text so that endings (`-imos`, `-ieron`) can be rendered as unbreakable pieces. */
export function splitEndings(text: string): TextPart[] {
  const parts: TextPart[] = [];
  let last = 0;
  for (const match of text.matchAll(ENDING)) {
    const index = match.index ?? 0;
    if (index > last) {
      parts.push({ text: text.slice(last, index), nowrap: false });
    }
    parts.push({ text: match[0], nowrap: true });
    last = index + match[0].length;
  }
  if (last < text.length) {
    parts.push({ text: text.slice(last), nowrap: false });
  }
  return parts;
}
