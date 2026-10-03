import { parseRichText, splitEndings } from './rich-text.helper';

describe('parseRichText', () => {
  it('returns plain text as one segment', () => {
    expect(parseRichText('hablo')).toEqual([{ text: 'hablo', strong: false, em: false }]);
  });

  it('parses strong parts', () => {
    expect(parseRichText('habl**é**')).toEqual([
      { text: 'habl', strong: false, em: false },
      { text: 'é', strong: true, em: false },
    ]);
  });

  it('parses emphasis', () => {
    expect(parseRichText('Приклад: *Ayer comí.*')).toEqual([
      { text: 'Приклад: ', strong: false, em: false },
      { text: 'Ayer comí.', strong: false, em: true },
    ]);
  });

  it('parses mixed markup', () => {
    expect(parseRichText('*Hoy* **he** comido')).toEqual([
      { text: 'Hoy', strong: false, em: true },
      { text: ' ', strong: false, em: false },
      { text: 'he', strong: true, em: false },
      { text: ' comido', strong: false, em: false },
    ]);
  });

  it('keeps unmatched markers literally', () => {
    expect(parseRichText('a ** b')).toEqual([{ text: 'a ** b', strong: false, em: false }]);
  });

  it('returns no segments for an empty string', () => {
    expect(parseRichText('')).toEqual([]);
  });
});

describe('splitEndings', () => {
  it('isolates endings so they cannot break after the hyphen', () => {
    expect(splitEndings('-o, -imos')).toEqual([
      { text: '-o', nowrap: true },
      { text: ', ', nowrap: false },
      { text: '-imos', nowrap: true },
    ]);
  });

  it('leaves text without endings alone', () => {
    expect(splitEndings('habl- + o')).toEqual([{ text: 'habl- + o', nowrap: false }]);
  });
});
