import { SectionKind } from '../../enums/section-kind.enum';
import { Tense } from '../../interfaces/tense.interface';

export const TENSE: Tense = {
  id: 'futuro-simple',
  intro:
    'Майбутні факти, прогнози, обіцянки та рішення. Також — припущення про теперішнє: *Serán las diez* — «Мабуть, зараз десята».',
  formula: '**інфінітив + закінчення** (hablar + -é)',
  sections: [
    {
      kind: SectionKind.Usage,
      title: 'Коли вживати',
      blocks: [
        {
          type: 'list',
          items: [
            'Майбутні факти та прогнози: *Mañana lloverá en el norte.*',
            'Обіцянки: *Te llamaré esta noche.* — «Я тобі подзвоню ввечері».',
            'Рішення, ухвалене просто зараз: *Vale, lo haré yo.* (у розмові часто просто presente: *Ya lo hago yo.*)',
            'Припущення про теперішнє: *Serán las diez.* — «Мабуть, зараз десята». *¿Dónde está Ana? — Estará en casa.*',
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Аналог в англійській — **Future Simple** (*will*): *I will speak* = *hablaré*.',
        },
      ],
    },
    {
      kind: SectionKind.Endings,
      title: 'Закінчення',
      blocks: [
        {
          type: 'paragraph',
          text: 'Закінчення однакові для -ar, -er, -ir і додаються до **цілого інфінітива**: hablar + é = hablaré.',
        },
        {
          type: 'table',
          persons: true,
          headers: ['', 'Закінчення'],
          rows: [
            ['yo', '**-é**'],
            ['tú', '**-ás**'],
            ['él / ella / usted', '**-á**'],
            ['nosotros', '**-emos**'],
            ['vosotros', '**-éis**'],
            ['ellos / ustedes', '**-án**'],
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
          headers: ['', '-ar (hablar)', '-er (comer)', '-ir (vivir)'],
          rows: [
            ['yo', 'hablar**é**', 'comer**é**', 'vivir**é**'],
            ['tú', 'hablar**ás**', 'comer**ás**', 'vivir**ás**'],
            ['él / ella / usted', 'hablar**á**', 'comer**á**', 'vivir**á**'],
            ['nosotros', 'hablar**emos**', 'comer**emos**', 'vivir**emos**'],
            ['vosotros', 'hablar**éis**', 'comer**éis**', 'vivir**éis**'],
            ['ellos / ustedes', 'hablar**án**', 'comer**án**', 'vivir**án**'],
          ],
        },
      ],
    },
    {
      kind: SectionKind.Irregular,
      title: 'Неправильні дієслова',
      blocks: [
        {
          type: 'paragraph',
          text: 'Закінчення ті самі, змінюється лише основа. Це **ті самі основи, що й у condicional**: tendré / tendría, haré / haría.',
        },
      ],
      groups: [
        {
          title: 'Випадає e',
          rule: 'З інфінітива зникає голосна **e** перед -r: poder → podr-.',
          table: {
            type: 'table',
            headers: ['Дієслово', 'Основа', 'yo', 'nosotros'],
            rows: [
              ['poder', '**podr-**', 'podré', 'podremos'],
              ['querer', '**querr-**', 'querré', 'querremos'],
              ['saber', '**sabr-**', 'sabré', 'sabremos'],
              ['haber', '**habr-**', 'habré', 'habremos'],
              ['caber', '**cabr-**', 'cabré', 'cabremos'],
            ],
          },
        },
        {
          title: 'e / i → d',
          rule: 'Голосна **e** або **i** перед -r замінюється на **d**: tener → tendr-.',
          table: {
            type: 'table',
            headers: ['Дієслово', 'Основа', 'yo', 'nosotros'],
            rows: [
              ['tener', '**tendr-**', 'tendré', 'tendremos'],
              ['poner', '**pondr-**', 'pondré', 'pondremos'],
              ['salir', '**saldr-**', 'saldré', 'saldremos'],
              ['venir', '**vendr-**', 'vendré', 'vendremos'],
              ['valer', '**valdr-**', 'valdré', 'valdremos'],
            ],
          },
        },
        {
          title: 'Особливі',
          rule: 'Основу треба просто запам’ятати.',
          table: {
            type: 'table',
            headers: ['Дієслово', 'Основа', 'yo', 'nosotros'],
            rows: [
              ['hacer', '**har-**', 'haré', 'haremos'],
              ['decir', '**dir-**', 'diré', 'diremos'],
            ],
          },
        },
        {
          title: 'Повне відмінювання',
          rule: 'Неправильна основа однакова в усіх особах, закінчення — звичайні.',
          table: {
            type: 'table',
            persons: true,
            headers: ['', 'tener', 'hacer'],
            rows: [
              ['yo', 'tendr**é**', 'har**é**'],
              ['tú', 'tendr**ás**', 'har**ás**'],
              ['él / ella / usted', 'tendr**á**', 'har**á**'],
              ['nosotros', 'tendr**emos**', 'har**emos**'],
              ['vosotros', 'tendr**éis**', 'har**éis**'],
              ['ellos / ustedes', 'tendr**án**', 'har**án**'],
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
            ['mañana', 'завтра'],
            ['pasado mañana', 'післязавтра'],
            ['la semana que viene / el próximo mes', 'наступного тижня / наступного місяця'],
            ['el año que viene', 'наступного року'],
            ['dentro de dos días', 'через два дні'],
            ['algún día', 'колись'],
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
            { es: 'Mañana **lloverá** en el norte.', uk: 'Завтра на півночі буде дощ.' },
            {
              es: 'Te **llamaré** esta noche, te lo prometo.',
              uk: 'Я тобі подзвоню ввечері, обіцяю.',
            },
            {
              es: 'El año que viene **tendré** más tiempo.',
              uk: 'Наступного року в мене буде більше часу.',
            },
            { es: '¿Qué **haréis** el verano que viene?', uk: 'Що ви робитимете наступного літа?' },
            { es: 'No se lo **diré** a nadie.', uk: 'Я нікому про це не скажу.' },
            { es: '¿Qué hora es? — **Serán** las diez.', uk: 'Котра година? — Мабуть, десята.' },
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
          text: 'У розмовній мові для планів частіше вживають *ir a + infinitivo*: *Voy a viajar* — план; *Viajaré* — звучить формальніше або як прогноз.',
        },
        {
          type: 'note',
          tone: 'warning',
          text: 'Знак наголосу пишемо в усіх формах, **крім nosotros**: hablaré, hablarás, hablará, але hablaremos.',
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Ті самі неправильні основи працюють у condicional: tendré → tendría, diré → diría.',
        },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Teneré tiempo.', right: '**Tendré** tiempo.', why: 'tener → tendr-' },
    { wrong: 'Haceré la cena.', right: '**Haré** la cena.', why: 'hacer → har-' },
    { wrong: 'Deciré la verdad.', right: '**Diré** la verdad.', why: 'decir → dir-' },
    {
      wrong: 'Mañana hablare con él.',
      right: 'Mañana **hablaré** con él.',
      why: 'потрібен знак наголосу на -é',
    },
    {
      wrong: 'Nosotros hablarémos.',
      right: 'Nosotros **hablaremos**.',
      why: 'у nosotros знака наголосу немає',
    },
    { wrong: 'Poderé venir.', right: '**Podré** venir.', why: 'poder → podr- (випадає e)' },
  ],
  selfCheck: [
    { prompt: 'Mañana (yo, tener) ___ más tiempo.', answer: 'tendré' },
    { prompt: 'El año que viene (nosotros, viajar) ___ a México.', answer: 'viajaremos' },
    { prompt: 'No te preocupes, (yo, hacer) ___ la cena.', answer: 'haré' },
    { prompt: '¿(Tú, venir) ___ a la fiesta?', answer: 'Vendrás' },
    { prompt: 'Te lo (yo, decir) ___ mañana.', answer: 'diré' },
    { prompt: '¿Qué hora es? — No lo sé, (ser) ___ las diez.', answer: 'serán' },
    { prompt: 'El año que viene vosotros ya (poder) ___ votar.', answer: 'podréis' },
    { prompt: 'Mañana ellos (salir) ___ a las ocho.', answer: 'saldrán' },
  ],
};
