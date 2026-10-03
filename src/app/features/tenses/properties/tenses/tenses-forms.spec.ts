import { TenseId } from '../../types/tense-id.types';
import { TENSE_LOADERS } from '../tense-loaders.properties';

/** Spot checks of well-known forms (Peninsular Spanish), searched in the tense's content. */
const KNOWN_FORMS: Record<TenseId, string[]> = {
  presente: ['tengo', 'conozco', 'juego', 'soy', 'vais'],
  'estar-gerundio': ['durmiendo', 'leyendo', 'estáis'],
  'ir-a-infinitivo': ['voy', 'vais'],
  'preterito-perfecto': ['hecho', 'vuelto', 'habéis'],
  'preterito-indefinido': ['tuve', 'hizo', 'dijeron', 'fueron', 'busqué'],
  'preterito-imperfecto': ['iba', 'era', 'veía'],
  'preterito-pluscuamperfecto': ['había', 'habíais'],
  'futuro-simple': ['tendré', 'haré', 'diré'],
  'futuro-perfecto': ['habré'],
  'condicional-simple': ['pondría', 'diría'],
  'condicional-compuesto': ['habría'],
  imperativo: ['ten', 'haz', 'pon', 'no tengas'],
  'presente-subjuntivo': ['tenga', 'sea', 'vaya', 'haya'],
  'imperfecto-subjuntivo': ['tuviera', 'fuera', 'hiciera'],
};

const wholeWord = (form: string) => new RegExp(`(^|[^\\p{L}])${form}([^\\p{L}]|$)`, 'u');

/** Content text with emphasis markup removed, so `habl**é**` reads as `hablé`. */
async function plainText(id: TenseId): Promise<string> {
  const tense = await TENSE_LOADERS[id]();
  return JSON.stringify(tense).replace(/\*/g, '');
}

describe.each(Object.entries(KNOWN_FORMS) as [TenseId, string[]][])(
  'known forms: %s',
  (id, forms) => {
    it.each(forms)('contains «%s»', async (form) => {
      expect(await plainText(id)).toMatch(wholeWord(form));
    });
  },
);

describe('common misspellings', () => {
  const WRONG_FORMS = ['teneré', 'tenería', 'hacé', 'dició', 'andé', 'cabió', 'sabo', 'conoco'];

  it.each(Object.keys(KNOWN_FORMS) as TenseId[])('%s avoids known wrong forms', async (id) => {
    // Wrong forms may appear only in the «mistakes» list, never in rules, tables or examples.
    const tense = await TENSE_LOADERS[id]();
    const text = JSON.stringify({ ...tense, mistakes: [] }).replace(/\*/g, '');
    for (const wrong of WRONG_FORMS) {
      expect(text, `${id}: ${wrong}`).not.toMatch(wholeWord(wrong));
    }
  });
});
