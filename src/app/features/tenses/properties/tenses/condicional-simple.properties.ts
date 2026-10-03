import { SectionKind } from '../../enums/section-kind.enum';
import { Tense } from '../../interfaces/tense.interface';

export const TENSE: Tense = {
  id: 'condicional-simple',
  intro:
    'Українське «би»: ввічливі прохання, поради, бажання, гіпотези. Формула: **увесь інфінітив + закінчення** — однакові для -ar, -er, -ir.',
  formula: '**увесь інфінітив + закінчення** (hablar + -ía)',
  sections: [
    {
      kind: SectionKind.Usage,
      title: 'Коли вживати',
      blocks: [
        {
          type: 'list',
          items: [
            'Ввічливість: *¿Podría ayudarme?* — «Чи не могли б ви допомогти?»',
            'Бажання: *Me gustaría un café.* — «Я б хотів кави».',
            'Порада: *Yo que tú, estudiaría más.* — «На твоєму місці я б більше вчив».',
            'Гіпотеза: *Con más dinero, viviría en la playa.* — «Маючи більше грошей, я б жив біля моря».',
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Аналог в англійській — **would**: *I would go* = *Iría*.',
        },
      ],
    },
    {
      kind: SectionKind.Endings,
      title: 'Закінчення (однакові для -ar, -er, -ir)',
      blocks: [
        {
          type: 'paragraph',
          text: 'Додаються до **цілого інфінітива**: hablar + ía = hablaría.',
        },
        {
          type: 'table',
          persons: true,
          headers: ['', 'Закінчення'],
          rows: [
            ['yo', '**-ía**'],
            ['tú', '**-ías**'],
            ['él / ella / usted', '**-ía**'],
            ['nosotros', '**-íamos**'],
            ['vosotros', '**-íais**'],
            ['ellos / ustedes', '**-ían**'],
          ],
        },
      ],
    },
    {
      kind: SectionKind.Conjugation,
      title: 'Приклад відмінювання',
      blocks: [
        {
          type: 'table',
          persons: true,
          headers: ['', 'hablar', 'comer', 'vivir'],
          rows: [
            ['yo', 'hablar**ía**', 'comer**ía**', 'vivir**ía**'],
            ['tú', 'hablar**ías**', 'comer**ías**', 'vivir**ías**'],
            ['él / ella / usted', 'hablar**ía**', 'comer**ía**', 'vivir**ía**'],
            ['nosotros', 'hablar**íamos**', 'comer**íamos**', 'vivir**íamos**'],
            ['vosotros', 'hablar**íais**', 'comer**íais**', 'vivir**íais**'],
            ['ellos / ustedes', 'hablar**ían**', 'comer**ían**', 'vivir**ían**'],
          ],
        },
      ],
    },
    {
      kind: SectionKind.Irregular,
      title: 'Ходові неправильні основи',
      blocks: [
        {
          type: 'paragraph',
          text: 'Закінчення ті самі, змінюється лише основа. Ці ж основи працюють у майбутньому часі (futuro): tendré, haré.',
        },
      ],
      groups: [
        {
          title: 'Випадає e',
          rule: 'З інфінітива випадає **e** перед -r: poder → podr-.',
          table: {
            type: 'table',
            headers: ['Дієслово', 'Основа', 'yo'],
            rows: [
              ['poder', 'podr-', '**podría**'],
              ['querer', 'querr-', '**querría**'],
              ['saber', 'sabr-', '**sabría**'],
              ['haber', 'habr-', '**habría**'],
              ['caber', 'cabr-', '**cabría**'],
            ],
          },
        },
        {
          title: 'e / i → d',
          rule: 'Голосна **e** або **i** перед -r замінюється на **d**: tener → tendr-.',
          table: {
            type: 'table',
            headers: ['Дієслово', 'Основа', 'yo'],
            rows: [
              ['tener', 'tendr-', '**tendría**'],
              ['poner', 'pondr-', '**pondría**'],
              ['salir', 'saldr-', '**saldría**'],
              ['venir', 'vendr-', '**vendría**'],
              ['valer', 'valdr-', '**valdría**'],
            ],
          },
        },
        {
          title: 'Особливі',
          rule: 'Ці основи треба просто запам’ятати.',
          table: {
            type: 'table',
            headers: ['Дієслово', 'Основа', 'yo'],
            rows: [
              ['hacer', 'har-', '**haría**'],
              ['decir', 'dir-', '**diría**'],
            ],
          },
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
            ['yo que tú', 'на твоєму місці'],
            ['en tu lugar', 'на твоєму місці'],
            ['me gustaría', 'я б хотів'],
            ['¿podría…?', 'чи не могли б ви…?'],
            ['con más tiempo / dinero', 'якби було більше часу / грошей'],
            ['en ese caso', 'у такому разі'],
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
            { es: '¿**Podría** ayudarme?', uk: 'Чи не могли б ви мені допомогти?' },
            { es: 'Me **gustaría** un café.', uk: 'Я б хотів кави.' },
            { es: 'Yo que tú, **estudiaría** más.', uk: 'На твоєму місці я б більше вчив.' },
            {
              es: 'Con más dinero, **viviría** en la playa.',
              uk: 'Маючи більше грошей, я б жив біля моря.',
            },
            { es: 'Yo que tú, no **diría** nada.', uk: 'На твоєму місці я б нічого не казав.' },
            { es: '¿Dónde **pondrías** el sofá?', uk: 'Куди б ти поставив диван?' },
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
          tone: 'warning',
          text: 'У «якби…» після **si** condicional не ставлять — там інший час (imperfecto de subjuntivo), його ти ще проходитимеш: *Si tuviera dinero, compraría una casa.*',
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Неправильні основи ті самі, що й у futuro simple: **tendré** → **tendría**, **haré** → **haría**, **diré** → **diría**.',
        },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Tenería más tiempo.',
      right: '**Tendría** más tiempo.',
      why: 'неправильна основа: tendr-',
    },
    {
      wrong: 'Si tendría dinero, viajaría.',
      right: 'Si **tuviera** dinero, viajaría.',
      why: 'після si — imperfecto de subjuntivo',
    },
    {
      wrong: 'Yo que tú, no deciría nada.',
      right: 'Yo que tú, no **diría** nada.',
      why: 'decir → dir-',
    },
    { wrong: 'Haceríamos la cena.', right: '**Haríamos** la cena.', why: 'hacer → har-' },
    {
      wrong: 'Me gustaria un café.',
      right: 'Me **gustaría** un café.',
      why: 'знак наголосу над i обов’язковий',
    },
    {
      wrong: 'Hablíamos con él.',
      right: '**Hablaríamos** con él.',
      why: 'закінчення додають до всього інфінітива',
    },
  ],
  selfCheck: [
    { prompt: '¿(Usted, poder) ___ repetir, por favor? (ввічливо)', answer: 'Podría' },
    { prompt: 'Yo que tú, no (decir) ___ nada.', answer: 'diría' },
    { prompt: 'Me (gustar) ___ visitar Sevilla algún día.', answer: 'gustaría' },
    {
      prompt: 'Con más tiempo, (nosotros, hacer) ___ más deporte, pero no tenemos tiempo.',
      answer: 'haríamos',
    },
    { prompt: 'En mi lugar, ¿dónde (tú, poner) ___ el sofá?', answer: 'pondrías' },
    { prompt: 'Yo que tú, (yo, salir) ___ antes.', answer: 'saldría' },
    {
      prompt: 'Con más dinero, (ellos, vivir) ___ en la playa, pero no tienen dinero.',
      answer: 'vivirían',
    },
  ],
};
