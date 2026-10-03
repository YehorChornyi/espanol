import { SECTION_ORDER, SectionKind } from '../../enums/section-kind.enum';
import { Tense } from '../../interfaces/tense.interface';
import { ContentBlock, TableBlock } from '../../types/content-block.types';
import { TENSE_IDS, TenseId } from '../../types/tense-id.types';
import { TENSE_CATALOGUE } from '../tense-catalogue.properties';
import { TENSE_LOADERS } from '../tense-loaders.properties';

const PERSONS = ['yo', 'tú', 'él / ella / usted', 'nosotros', 'vosotros', 'ellos / ustedes'];
const IMPERATIVE_PERSONS = ['tú', 'usted', 'nosotros', 'vosotros', 'ustedes'];

const WITHOUT_ENDINGS: TenseId[] = ['estar-gerundio', 'ir-a-infinitivo'];
const WITHOUT_IRREGULAR: TenseId[] = ['ir-a-infinitivo'];
const WITH_COMPARISON: TenseId[] = [
  'preterito-perfecto',
  'preterito-indefinido',
  'preterito-imperfecto',
];

function tablesOf(tense: Tense): TableBlock[] {
  const isTable = (block: ContentBlock): block is TableBlock => block.type === 'table';
  return tense.sections.flatMap((section) => [
    ...section.blocks.filter(isTable),
    ...(section.groups ?? []).map((group) => group.table),
  ]);
}

describe('tense catalogue', () => {
  it('lists every tense once, in TENSE_IDS order', () => {
    expect(TENSE_CATALOGUE.map((tense) => tense.id)).toEqual([...TENSE_IDS]);
  });

  it('keeps hints short (≤ 30 chars)', () => {
    for (const tense of TENSE_CATALOGUE) {
      expect(tense.hint.length, tense.id).toBeLessThanOrEqual(30);
    }
  });
});

describe.each(TENSE_IDS)('tense content: %s', (id) => {
  let tense: Tense;

  beforeAll(async () => {
    tense = await TENSE_LOADERS[id]();
  });

  it('has the matching id and an intro and formula', () => {
    expect(tense.id).toBe(id);
    expect(tense.intro.length).toBeGreaterThan(0);
    expect(tense.formula.length).toBeGreaterThan(0);
  });

  it('orders sections by SectionKind without duplicates', () => {
    const kinds = tense.sections.map((section) => section.kind);
    expect(new Set(kinds).size).toBe(kinds.length);
    const positions = kinds.map((kind) => SECTION_ORDER.indexOf(kind));
    expect(positions).toEqual([...positions].sort((a, b) => a - b));
  });

  it('has every required section', () => {
    const kinds = new Set(tense.sections.map((section) => section.kind));
    expect(kinds.has(SectionKind.Usage)).toBe(true);
    expect(kinds.has(SectionKind.Conjugation)).toBe(true);
    expect(kinds.has(SectionKind.Examples)).toBe(true);
    expect(kinds.has(SectionKind.Endings)).toBe(!WITHOUT_ENDINGS.includes(id));
    expect(kinds.has(SectionKind.Irregular)).toBe(!WITHOUT_IRREGULAR.includes(id));
    if (WITH_COMPARISON.includes(id)) {
      expect(kinds.has(SectionKind.Comparison)).toBe(true);
    }
  });

  it('gives every section at least one block, and irregular sections at least one group', () => {
    for (const section of tense.sections) {
      expect(section.blocks.length + (section.groups?.length ?? 0), section.title).toBeGreaterThan(
        0,
      );
      if (section.kind === SectionKind.Irregular) {
        expect(section.groups?.length ?? 0).toBeGreaterThan(0);
      } else {
        expect(section.groups ?? []).toEqual([]);
      }
    }
  });

  it('keeps every table row as wide as its headers', () => {
    for (const table of tablesOf(tense)) {
      for (const row of table.rows) {
        expect(row.length, `${table.caption ?? table.headers.join('|')}: ${row[0]}`).toBe(
          table.headers.length,
        );
      }
      expect(table.rows.length).toBeGreaterThan(0);
    }
  });

  it('uses the full person set in person tables', () => {
    const expected = id === 'imperativo' ? IMPERATIVE_PERSONS : PERSONS;
    for (const table of tablesOf(tense).filter((t) => t.persons)) {
      expect(table.rows.map((row) => row[0])).toEqual(expected);
    }
  });

  it('has examples, mistakes and self-check items', () => {
    const examples = tense.sections
      .flatMap((section) => section.blocks)
      .flatMap((block) => (block.type === 'examples' ? block.items : []));
    expect(examples.length).toBeGreaterThanOrEqual(3);
    for (const example of examples) {
      expect(example.uk.length).toBeGreaterThan(0);
    }
    expect(tense.mistakes.length).toBeGreaterThanOrEqual(3);
    expect(tense.selfCheck.length).toBeGreaterThanOrEqual(5);
  });
});
