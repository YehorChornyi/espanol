import { Tense } from '../interfaces/tense.interface';
import { TenseId } from '../types/tense-id.types';

/** Each tense's content is a separate lazy chunk. */
export const TENSE_LOADERS: Record<TenseId, () => Promise<Tense>> = {
  presente: () => import('./tenses/presente.properties').then((m) => m.TENSE),
  'estar-gerundio': () => import('./tenses/estar-gerundio.properties').then((m) => m.TENSE),
  'ir-a-infinitivo': () => import('./tenses/ir-a-infinitivo.properties').then((m) => m.TENSE),
  'preterito-perfecto': () => import('./tenses/preterito-perfecto.properties').then((m) => m.TENSE),
  'preterito-indefinido': () =>
    import('./tenses/preterito-indefinido.properties').then((m) => m.TENSE),
  'preterito-imperfecto': () =>
    import('./tenses/preterito-imperfecto.properties').then((m) => m.TENSE),
  'preterito-pluscuamperfecto': () =>
    import('./tenses/preterito-pluscuamperfecto.properties').then((m) => m.TENSE),
  'futuro-simple': () => import('./tenses/futuro-simple.properties').then((m) => m.TENSE),
  'futuro-perfecto': () => import('./tenses/futuro-perfecto.properties').then((m) => m.TENSE),
  'condicional-simple': () => import('./tenses/condicional-simple.properties').then((m) => m.TENSE),
  'condicional-compuesto': () =>
    import('./tenses/condicional-compuesto.properties').then((m) => m.TENSE),
  imperativo: () => import('./tenses/imperativo.properties').then((m) => m.TENSE),
  'presente-subjuntivo': () =>
    import('./tenses/presente-subjuntivo.properties').then((m) => m.TENSE),
  'imperfecto-subjuntivo': () =>
    import('./tenses/imperfecto-subjuntivo.properties').then((m) => m.TENSE),
};
