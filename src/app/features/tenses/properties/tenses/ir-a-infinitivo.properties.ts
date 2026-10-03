import { SectionKind } from '../../enums/section-kind.enum';
import { Tense } from '../../interfaces/tense.interface';

export const TENSE: Tense = {
  id: 'ir-a-infinitivo',
  intro:
    'Плани й наміри: «збираюся зробити». Найближче майбутнє, як англійське *be going to*: *Voy a comer* — «Я збираюся їсти».',
  formula: '**ir (у presente) + a + інфінітив** (voy a hablar)',
  sections: [
    {
      kind: SectionKind.Usage,
      title: 'Коли вживати',
      blocks: [
        {
          type: 'list',
          items: [
            'Плани й наміри: *Esta noche voy a cocinar.*',
            'Найближче майбутнє: *¿Qué vas a hacer el sábado?*',
            'Прогноз за ознаками, які видно вже зараз: *Va a llover.*',
            'Пропозиція «давай»: *¡Vamos a ver!*',
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Аналог в англійській — **be going to**. У розмовній мові це один із найпоширеніших способів говорити про майбутнє (поряд із presente: *Mañana viajo*).',
        },
      ],
    },
    {
      kind: SectionKind.Conjugation,
      title: 'Утворення',
      blocks: [
        {
          type: 'paragraph',
          text: 'Закінчень немає — змінюється лише **ir**, а **a + інфінітив** не змінюються.',
        },
        {
          type: 'table',
          persons: true,
          headers: ['', 'ir', '+ a', '+ інфінітив'],
          rows: [
            ['yo', '**voy**', 'a', 'comer'],
            ['tú', '**vas**', 'a', 'trabajar'],
            ['él / ella / usted', '**va**', 'a', 'llamar'],
            ['nosotros', '**vamos**', 'a', 'viajar'],
            ['vosotros', '**vais**', 'a', 'salir'],
            ['ellos / ustedes', '**van**', 'a', 'estudiar'],
          ],
        },
      ],
    },
    {
      kind: SectionKind.SignalWords,
      title: 'Слова-маркери',
      blocks: [
        {
          type: 'table',
          headers: ['Маркер', 'Переклад'],
          rows: [
            ['mañana', 'завтра'],
            ['esta noche', 'сьогодні ввечері'],
            ['este fin de semana', 'цими вихідними'],
            ['el próximo mes', 'наступного місяця'],
            ['la semana que viene', 'наступного тижня'],
            ['pronto', 'скоро'],
          ],
        },
      ],
    },
    {
      kind: SectionKind.Examples,
      title: 'Приклади',
      blocks: [
        {
          type: 'examples',
          items: [
            { es: 'Esta noche **voy a cocinar**.', uk: 'Сьогодні ввечері я збираюся готувати.' },
            { es: '¿Qué **vas a hacer** el sábado?', uk: 'Що ти робитимеш у суботу?' },
            { es: '**Va a llover**.', uk: 'Буде дощ (видно за ознаками).' },
            { es: 'Mañana **vamos a viajar** a Sevilla.', uk: 'Завтра ми їдемо до Севільї.' },
            { es: '¡**Vamos a ver**!', uk: 'Подивимося!' },
          ],
        },
      ],
    },
    {
      kind: SectionKind.Notes,
      title: 'На замітку',
      blocks: [
        {
          type: 'note',
          tone: 'tip',
          text: 'Неправильні форми інших дієслів тут не потрібні: інфінітив не змінюється. Треба знати лише presente від **ir**: voy, vas, va, vamos, vais, van.',
        },
        {
          type: 'note',
          tone: 'warning',
          text: 'Не забувай **a**: *voy a comer*, а не *voy comer*.',
        },
        {
          type: 'note',
          tone: 'tip',
          text: '*Vamos a…* ще означає «Давай…»: *¡Vamos a ver!* — «Подивимося!»',
        },
        {
          type: 'note',
          tone: 'tip',
          text: '*Va a llover* — «Буде дощ»: так кажуть, коли майбутнє вже видно за ознаками (хмари на небі).',
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Займенник ставиться перед ir або приєднується до інфінітива: *Lo voy a hacer* = *Voy a hacerlo*.',
        },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Voy comer.', right: 'Voy **a** comer.', why: 'потрібне a' },
    {
      wrong: 'Voy a hago los deberes.',
      right: 'Voy a **hacer** los deberes.',
      why: 'після a — інфінітив',
    },
    {
      wrong: 'Yo va a estudiar.',
      right: 'Yo **voy** a estudiar.',
      why: 'ir відмінюється за особами',
    },
    {
      wrong: 'Mañana estoy viajando a Madrid.',
      right: 'Mañana **voy a viajar** a Madrid.',
      why: 'estar + gerundio не для майбутнього',
    },
    { wrong: 'Vamos a comemos.', right: 'Vamos a **comer**.', why: 'інфінітив не змінюється' },
  ],
  selfCheck: [
    { prompt: 'Mañana (yo, llamar) ___ a mi madre. (план)', answer: 'voy a llamar' },
    { prompt: '¿Qué (tú, hacer) ___ el sábado?', answer: 'vas a hacer' },
    { prompt: 'Mira las nubes: (llover) ___ .', answer: 'va a llover' },
    { prompt: 'Esta noche (nosotros, cenar) ___ fuera.', answer: 'vamos a cenar' },
    { prompt: '¿(Vosotros, venir) ___ a la fiesta?', answer: 'vais a venir' },
    {
      prompt: 'El próximo mes (ellos, mudarse) ___ a Madrid.',
      answer: 'se van a mudar / van a mudarse',
    },
  ],
};
