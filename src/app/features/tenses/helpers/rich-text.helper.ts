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
