import { SectionKind } from '../../enums/section-kind.enum';
import { Tense } from '../../interfaces/tense.interface';

export const TENSE: Tense = {
  id: 'preterito-imperfecto',
  intro:
    'Минуле «як фон»: звички, описи, процеси без чітких меж. Українською зазвичай — недоконаний вид: *De niño jugaba al fútbol* — «У дитинстві я грав у футбол».',
  formula: '**основа + закінчення** (habl- + -aba, com- + -ía)',
  sections: [
    {
      kind: SectionKind.Usage,
      title: 'Коли вживати',
      blocks: [
        {
          type: 'list',
          items: [
            'Звички й регулярні дії в минулому («бувало», англ. *used to*): *De niño jugaba al fútbol todos los días.*',
            'Описи в минулому — люди, місця, вік, час, погода: *Tenía diez años. Eran las ocho y llovía.*',
            'Тло розповіді, обставини, за яких відбувалися події: *Hacía sol y la playa estaba llena.*',
            'Дія в процесі, яку перериває indefinido: *Leía cuando sonó el teléfono.*',
            'Дві паралельні тривалі дії: *Mientras yo cocinaba, él veía la tele.*',
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Аналог в англійській — **used to / was doing**. Imperfecto — це «декорації», indefinido — «події» на їхньому тлі.',
        },
      ],
    },
    {
      kind: SectionKind.Endings,
      title: 'Закінчення',
      blocks: [
        {
          type: 'paragraph',
          text: 'Відкинь -ar / -er / -ir і додай закінчення: habl-, com-, viv-. У -er та -ir закінчення однакові.',
        },
        {
          type: 'table',
          persons: true,
          headers: ['', '-ar', '-er / -ir'],
          rows: [
            ['yo', '**-aba**', '**-ía**'],
            ['tú', '**-abas**', '**-ías**'],
            ['él / ella / usted', '**-aba**', '**-ía**'],
            ['nosotros', '**-ábamos**', '**-íamos**'],
            ['vosotros', '**-abais**', '**-íais**'],
            ['ellos / ustedes', '**-aban**', '**-ían**'],
          ],
        },
        {
          type: 'paragraph',
          text: 'У -ar знак наголосу пишеться лише в **nosotros** (-ábamos); у -er / -ir — у всіх особах (-ía).',
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
            ['yo', 'habl**aba**', 'com**ía**', 'viv**ía**'],
            ['tú', 'habl**abas**', 'com**ías**', 'viv**ías**'],
            ['él / ella / usted', 'habl**aba**', 'com**ía**', 'viv**ía**'],
            ['nosotros', 'habl**ábamos**', 'com**íamos**', 'viv**íamos**'],
            ['vosotros', 'habl**abais**', 'com**íais**', 'viv**íais**'],
            ['ellos / ustedes', 'habl**aban**', 'com**ían**', 'viv**ían**'],
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
          text: 'Найпростіший час минулого: неправильних дієслів **лише три** — ser, ir, ver. Зміни кореня немає: *quería*, *podía*, *dormía*, *pedía*.',
        },
      ],
      groups: [
        {
          title: 'Єдині три неправильні: ser, ir, ver',
          rule: 'Ці форми треба просто запам’ятати. Усі інші дієслова, навіть tener, hacer чи decir, — правильні: *tenía*, *hacía*, *decía*.',
          table: {
            type: 'table',
            persons: true,
            headers: ['', 'ser', 'ir', 'ver'],
            rows: [
              ['yo', 'era', 'iba', 'veía'],
              ['tú', 'eras', 'ibas', 'veías'],
              ['él / ella / usted', 'era', 'iba', 'veía'],
              ['nosotros', 'éramos', 'íbamos', 'veíamos'],
              ['vosotros', 'erais', 'ibais', 'veíais'],
              ['ellos / ustedes', 'eran', 'iban', 'veían'],
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
            ['antes', 'раніше'],
            ['siempre', 'завжди'],
            ['a menudo', 'часто'],
            ['de niño / de pequeño', 'у дитинстві'],
            ['todos los días', 'щодня'],
            ['mientras', 'поки, у той час як'],
            ['cuando era joven', 'коли я був молодим'],
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
            {
              es: 'De niño **jugaba** al fútbol todos los días.',
              uk: 'У дитинстві я щодня грав у футбол.',
            },
            { es: '**Eran** las ocho y **llovía**.', uk: 'Була восьма година, і йшов дощ.' },
            { es: '**Leía** cuando sonó el teléfono.', uk: 'Я читав, коли задзвонив телефон.' },
            {
              es: 'Cuando **era** joven, **iba** a la playa cada verano.',
              uk: 'Коли я був молодим, щоліта їздив на пляж.',
            },
            { es: 'Antes **veía** mucho la tele.', uk: 'Раніше я багато дивився телевізор.' },
            { es: 'Antes aquí **había** un cine.', uk: 'Раніше тут був кінотеатр.' },
          ],
        },
      ],
    },
    {
      kind: SectionKind.Comparison,
      title: 'Indefinido vs Imperfecto — як вибрати',
      blocks: [
        {
          type: 'paragraph',
          text: 'Indefinido — це **подія**: що сталося, завершено, «кадр». Imperfecto — це **тло**: як було, що бувало регулярно, що тривало, «декорації».',
        },
        {
          type: 'table',
          headers: ['Pretérito indefinido (hablé)', 'Pretérito imperfecto (hablaba)'],
          rows: [
            ['Завершена дія, один раз', 'Повторювана дія, звичка в минулому'],
            ['Дія з чіткими межами (dos horas, en 2020)', 'Дія без меж, що тривала'],
            ['Нова подія, що перериває', 'Дія, яку перервали (тло)'],
            ['Послідовність подій у розповіді', 'Опис: вік, час, погода, вигляд, стан'],
            ['ayer, el lunes, de repente, una vez', 'antes, siempre, de niño, mientras, a menudo'],
          ],
        },
        {
          type: 'examples',
          items: [
            {
              es: '**Leía** cuando **sonó** el teléfono.',
              uk: 'Я читав (тло), коли задзвонив телефон (подія).',
            },
            {
              es: 'De niño **jugaba** al fútbol cada día.',
              uk: 'У дитинстві я щодня грав у футбол (звичка).',
            },
            {
              es: 'Ayer **jugué** al fútbol dos horas.',
              uk: 'Учора я дві години грав у футбол (завершено).',
            },
            {
              es: '**Era** tarde y **hacía** frío. De repente, **llegó** Ana.',
              uk: 'Було пізно й холодно. Раптом прийшла Ана.',
            },
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Тест: якщо українською можна сказати «бувало» або «тоді якраз» — це imperfecto. Якщо «і тут…», «одного разу» — indefinido.',
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
          text: '*hay* (є, існує) в imperfecto → **había**: *Había mucha gente en la calle.* (Для одноразової події — indefinido *hubo*: *Ayer hubo un accidente.*)',
        },
        {
          type: 'note',
          tone: 'warning',
          text: 'Форми **yo** та **él** збігаються (hablaba, comía, era) — особу видно з контексту або додай займенник: *Yo trabajaba, él estudiaba.*',
        },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Nosotros hablabamos mucho.',
      right: 'Nosotros **hablábamos** mucho.',
      why: 'у nosotros -ábamos зі знаком наголосу',
    },
    {
      wrong: 'De niño fui al parque cada día.',
      right: 'De niño **iba** al parque cada día.',
      why: 'звичка в минулому → imperfecto',
    },
    {
      wrong: 'Leí cuando sonó el teléfono.',
      right: '**Leía** cuando sonó el teléfono.',
      why: 'дія в процесі → imperfecto',
    },
    {
      wrong: 'De pequeño quiería ser médico.',
      right: 'De pequeño **quería** ser médico.',
      why: 'в imperfecto корінь не змінюється',
    },
    { wrong: 'Yo vía la tele.', right: 'Yo **veía** la tele.', why: 'ver зберігає e: veía' },
    {
      wrong: 'Antes hay un cine aquí.',
      right: 'Antes **había** un cine aquí.',
      why: 'hay → había',
    },
  ],
  selfCheck: [
    { prompt: 'De niño (yo, jugar) ___ en la calle.', answer: 'jugaba' },
    { prompt: 'Cuando yo era pequeño, mi abuela (ser) ___ muy simpática conmigo.', answer: 'era' },
    { prompt: 'Antes (nosotros, ir) ___ a la playa cada verano.', answer: 'íbamos' },
    { prompt: '(Ella, leer) ___ cuando sonó el teléfono.', answer: 'leía' },
    { prompt: 'Cuando era joven, (yo, vivir) ___ en Sevilla.', answer: 'vivía' },
    { prompt: '¿(Vosotros, ver) ___ dibujos animados de pequeños?', answer: 'veíais' },
    { prompt: 'Antes aquí (haber) ___ un mercado.', answer: 'había' },
  ],
};
