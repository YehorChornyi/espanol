import { SectionKind } from '../../enums/section-kind.enum';
import { Tense } from '../../interfaces/tense.interface';

export const TENSE: Tense = {
  id: 'condicional-compuesto',
  intro:
    '«Зробив би, але не зробив»: нереалізована дія в минулому, жаль і поради «заднім числом». *Habría venido, pero estaba enfermo* — «Я б прийшов, але був хворий».',
  formula: '**haber (condicional) + participio** (habría + hablado)',
  sections: [
    {
      kind: SectionKind.Usage,
      title: 'Коли вживати',
      blocks: [
        {
          type: 'list',
          items: [
            'Нереалізована гіпотеза в минулому — «зробив би, але не зробив»: *Habría venido, pero no tenía tiempo.*',
            'Жаль про минуле: *Me habría gustado verte.* — «Я б хотів тебе побачити (але не вийшло)».',
            'Порада про минуле: *Yo que tú, habría aceptado.* — «На твоєму місці я б погодився».',
            'Нереальна умова в минулому (третій тип): **si + pluscuamperfecto de subjuntivo**, а в головній частині — condicional compuesto: *Si hubiera estudiado, habría aprobado.*',
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Аналог в англійській — **would have + V3**: *I would have gone* = *Habría ido*.',
        },
      ],
    },
    {
      kind: SectionKind.Endings,
      title: 'Утворення',
      blocks: [
        {
          type: 'paragraph',
          text: 'Допоміжне дієслово **haber** у condicional simple + незмінний participio.',
        },
        {
          type: 'table',
          persons: true,
          headers: ['', 'haber (condicional)'],
          rows: [
            ['yo', 'habr**ía**'],
            ['tú', 'habr**ías**'],
            ['él / ella / usted', 'habr**ía**'],
            ['nosotros', 'habr**íamos**'],
            ['vosotros', 'habr**íais**'],
            ['ellos / ustedes', 'habr**ían**'],
          ],
        },
        {
          type: 'paragraph',
          text: 'Participio: відкинь -ar / -er / -ir і додай закінчення. Він не змінюється за родом і числом. Якщо основа -er / -ir закінчується на a / e / o, пишуть **-ído**: leído, oído, traído.',
        },
        {
          type: 'table',
          headers: ['Дієслово', 'Закінчення participio', 'Приклад'],
          rows: [
            ['-ar', '**-ado**', 'habl**ado**'],
            ['-er', '**-ido**', 'com**ido**'],
            ['-ir', '**-ido**', 'viv**ido**'],
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
            ['yo', 'habría habl**ado**', 'habría com**ido**', 'habría viv**ido**'],
            ['tú', 'habrías habl**ado**', 'habrías com**ido**', 'habrías viv**ido**'],
            ['él / ella / usted', 'habría habl**ado**', 'habría com**ido**', 'habría viv**ido**'],
            ['nosotros', 'habríamos habl**ado**', 'habríamos com**ido**', 'habríamos viv**ido**'],
            ['vosotros', 'habríais habl**ado**', 'habríais com**ido**', 'habríais viv**ido**'],
            ['ellos / ustedes', 'habrían habl**ado**', 'habrían com**ido**', 'habrían viv**ido**'],
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
          text: 'Форми haber завжди однакові — неправильним може бути лише **participio**.',
        },
      ],
      groups: [
        {
          title: 'Неправильні participios',
          rule: 'Ці форми треба запам’ятати — вони ті самі, що й у pretérito perfecto.',
          table: {
            type: 'table',
            headers: ['Дієслово', 'Participio', 'Приклад'],
            rows: [
              ['hacer', '**hecho**', 'habría hecho'],
              ['decir', '**dicho**', 'habría dicho'],
              ['ver', '**visto**', 'habría visto'],
              ['escribir', '**escrito**', 'habría escrito'],
              ['poner', '**puesto**', 'habría puesto'],
              ['volver', '**vuelto**', 'habría vuelto'],
              ['abrir', '**abierto**', 'habría abierto'],
              ['romper', '**roto**', 'habría roto'],
              ['morir', '**muerto**', 'habría muerto'],
              ['cubrir', '**cubierto**', 'habría cubierto'],
              ['descubrir', '**descubierto**', 'habría descubierto'],
              ['resolver', '**resuelto**', 'habría resuelto'],
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
            ['con más tiempo', 'якби було більше часу'],
            ['si hubiera / hubiese…', 'якби (тоді)…'],
            ['pero', 'але (не сталося)'],
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
            { es: '**Habría venido**, pero estaba enfermo.', uk: 'Я б прийшов, але був хворий.' },
            {
              es: 'Yo que tú, **habría aceptado** la oferta.',
              uk: 'На твоєму місці я б прийняв пропозицію.',
            },
            {
              es: 'Si hubiera estudiado, **habría aprobado**.',
              uk: 'Якби я вчився, я б склав іспит.',
            },
            {
              es: 'Con más tiempo, **habríamos visto** el museo.',
              uk: 'Якби було більше часу, ми б подивилися музей.',
            },
            { es: 'Me **habría gustado** verte.', uk: 'Я б хотів тебе побачити (але не вийшло).' },
            {
              es: 'En tu lugar, no le **habría dicho** nada.',
              uk: 'На твоєму місці я б нічого йому не сказав.',
            },
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
          text: 'У розмовній мові Іспанії в головній частині часто кажуть *hubiera* замість *habría*: *Si lo hubiera sabido, hubiera venido* = *Si lo hubiera sabido, habría venido*. Обидва варіанти правильні (RAE); тут ми вчимо **habría**.',
        },
        {
          type: 'note',
          tone: 'warning',
          text: 'Після умовного **si** («якщо / якби») condicional не ставлять: *Si hubiera sabido…*, а не *Si habría sabido…*. Condicional compuesto — лише в головній частині: *Si hubiera sabido, te lo habría dicho.*',
        },
        {
          type: 'note',
          tone: 'warning',
          text: 'Haber і participio не розділяють, а займенники ставлять перед haber: *Te lo habría dicho*, а не *Habría te lo dicho*.',
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Порівняй: *Iría* — «я б пішов (зараз / узагалі)»; *Habría ido* — «я б пішов (тоді, але не пішов)».',
        },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Si habría estudiado, habría aprobado.',
      right: 'Si **hubiera estudiado**, habría aprobado.',
      why: 'після si — pluscuamperfecto de subjuntivo',
    },
    { wrong: 'Habría hacido la cena.', right: 'Habría **hecho** la cena.', why: 'hacer → hecho' },
    {
      wrong: 'Habría te lo dicho.',
      right: '**Te lo habría** dicho.',
      why: 'займенники перед haber',
    },
    {
      wrong: 'Habría abrido la ventana.',
      right: 'Habría **abierto** la ventana.',
      why: 'abrir → abierto',
    },
    {
      wrong: 'Ellas habrían llegadas antes.',
      right: 'Ellas habrían **llegado** antes.',
      why: 'participio не змінюється',
    },
    {
      wrong: 'Habriamos ido.',
      right: '**Habríamos** ido.',
      why: 'знак наголосу над í обов’язковий',
    },
  ],
  selfCheck: [
    {
      prompt: 'Yo que tú, (yo, aceptar) ___ la oferta, pero ya es tarde.',
      answer: 'habría aceptado',
    },
    { prompt: 'Si hubiera estudiado, (yo, aprobar) ___.', answer: 'habría aprobado' },
    { prompt: 'Con más tiempo, ayer (nosotros, ver) ___ el museo.', answer: 'habríamos visto' },
    { prompt: 'En tu lugar, ayer no (yo, decir) ___ eso.', answer: 'habría dicho' },
    { prompt: '¿Qué (tú, hacer) ___ en mi lugar aquel día?', answer: 'habrías hecho' },
    {
      prompt: 'Si hubieran salido antes, (ellos, llegar) ___ a tiempo.',
      answer: 'habrían llegado',
    },
    { prompt: 'Si hubiera sabido la verdad, (yo, volver) ___ antes.', answer: 'habría vuelto' },
  ],
};
