/** All tenses in default (teaching) order. The sidebar and the overview follow this order. */
export const TENSE_IDS = [
  'presente',
  'estar-gerundio',
  'ir-a-infinitivo',
  'preterito-perfecto',
  'preterito-indefinido',
  'preterito-imperfecto',
  'preterito-pluscuamperfecto',
  'futuro-simple',
  'futuro-perfecto',
  'condicional-simple',
  'condicional-compuesto',
  'imperativo',
  'presente-subjuntivo',
  'imperfecto-subjuntivo',
] as const;

export type TenseId = (typeof TENSE_IDS)[number];
