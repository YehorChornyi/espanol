import { SectionKind } from '../../enums/section-kind.enum';
import { Tense } from '../../interfaces/tense.interface';

export const TENSE: Tense = {
  id: 'preterito-pluscuamperfecto',
  intro:
    '«Минуле до минулого»: дія, що завершилася раніше за іншу минулу дію. *Cuando llegué, la película ya había empezado* — «Коли я прийшов, фільм уже почався».',
  formula: '**haber (imperfecto) + participio** (había + hablado)',
  sections: [
    {
      kind: SectionKind.Usage,
      title: 'Коли вживати',
      blocks: [
        {
          type: 'list',
          items: [
            'Дія, що сталася раніше за іншу дію в минулому: *Cuando llegué, la película ya había empezado.*',
            'Пояснення причини в минулому — що було до того: *Estaba cansado porque no había dormido.*',
            'Досвід до певного моменту в минулому: *Nunca había visto el mar antes de aquel viaje.*',
            'Непряма мова про минуле: *Dijo que había terminado.* — «Він сказав, що закінчив».',
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Аналог в англійській — **Past Perfect**: *had spoken* = *había hablado*.',
        },
      ],
    },
    {
      kind: SectionKind.Endings,
      title: 'Haber + дієприкметник',
      blocks: [
        {
          type: 'paragraph',
          text: 'Haber стоїть в imperfecto і змінюється за особами; дієприкметник не змінюється.',
        },
        {
          type: 'table',
          persons: true,
          headers: ['', 'haber', '+ participio'],
          rows: [
            ['yo', '**había**', 'hablado'],
            ['tú', '**habías**', 'comido'],
            ['él / ella / usted', '**había**', 'vivido'],
            ['nosotros', '**habíamos**', 'trabajado'],
            ['vosotros', '**habíais**', 'salido'],
            ['ellos / ustedes', '**habían**', 'terminado'],
          ],
        },
        {
          type: 'paragraph',
          text: 'Закінчення дієприкметника (не змінюються):',
        },
        {
          type: 'table',
          headers: ['Дієслово', 'Закінчення', 'Приклад'],
          rows: [
            ['-ar', '**-ado**', 'hablar → habl**ado**'],
            ['-er', '**-ido**', 'comer → com**ido**'],
            ['-ir', '**-ido**', 'vivir → viv**ido**'],
            [
              'a / e / o + -er/-ir',
              '**-ído** (зі знаком наголосу)',
              'leer → le**ído**, oír → o**ído**',
            ],
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
            ['yo', '**había** habl**ado**', '**había** com**ido**', '**había** viv**ido**'],
            ['tú', '**habías** habl**ado**', '**habías** com**ido**', '**habías** viv**ido**'],
            [
              'él / ella / usted',
              '**había** habl**ado**',
              '**había** com**ido**',
              '**había** viv**ido**',
            ],
            [
              'nosotros',
              '**habíamos** habl**ado**',
              '**habíamos** com**ido**',
              '**habíamos** viv**ido**',
            ],
            [
              'vosotros',
              '**habíais** habl**ado**',
              '**habíais** com**ido**',
              '**habíais** viv**ido**',
            ],
            [
              'ellos / ustedes',
              '**habían** habl**ado**',
              '**habían** com**ido**',
              '**habían** viv**ido**',
            ],
          ],
        },
      ],
    },
    {
      kind: SectionKind.Irregular,
      title: 'Неправильні дієприкметники',
      blocks: [
        {
          type: 'paragraph',
          text: 'Haber у imperfecto — правильний. Неправильними бувають лише дієприкметники, і вони **ті самі, що й у pretérito perfecto**.',
        },
      ],
      groups: [
        {
          title: 'Ходові неправильні дієприкметники',
          rule: 'Ті самі форми, що й у pretérito perfecto: *he hecho* → *había hecho*.',
          table: {
            type: 'table',
            headers: ['Дієслово', 'Дієприкметник', 'Дієслово', 'Дієприкметник'],
            rows: [
              ['hacer', '**hecho**', 'volver', '**vuelto**'],
              ['decir', '**dicho**', 'devolver', '**devuelto**'],
              ['ver', '**visto**', 'resolver', '**resuelto**'],
              ['escribir', '**escrito**', 'abrir', '**abierto**'],
              ['poner', '**puesto**', 'cubrir', '**cubierto**'],
              ['romper', '**roto**', 'descubrir', '**descubierto**'],
              ['morir', '**muerto**', 'deshacer', '**deshecho**'],
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
            ['ya', 'уже'],
            ['todavía no / aún no', 'ще не'],
            ['nunca … antes', 'ніколи раніше'],
            ['antes de que…', 'до того як…'],
            ['cuando llegué / cuando llegamos', 'коли я прийшов / коли ми прийшли'],
            ['porque…', 'тому що… (пояснення в минулому)'],
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
              es: 'Cuando llegué, la película ya **había empezado**.',
              uk: 'Коли я прийшов, фільм уже почався.',
            },
            {
              es: 'Nunca **había visto** el mar antes de aquel viaje.',
              uk: 'До тієї подорожі я ніколи не бачив моря.',
            },
            {
              es: 'Estaba cansado porque no **había dormido** bien.',
              uk: 'Я був втомлений, бо погано спав.',
            },
            {
              es: 'Cuando llamaste, todavía no **habíamos comido**.',
              uk: 'Коли ти подзвонив, ми ще не поїли.',
            },
            {
              es: 'Ana dijo que ya **había hecho** los deberes.',
              uk: 'Ана сказала, що вже зробила домашнє завдання.',
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
          text: 'Порівняй з indefinido: *Cuando llegué, la película empezó* — фільм почався **після** мого приходу (дії йдуть одна за одною). *Cuando llegué, la película ya había empezado* — фільм почався **до** того.',
        },
        {
          type: 'note',
          tone: 'warning',
          text: 'Займенник ставимо перед haber, а не між haber і дієприкметником: *Ya lo había hecho*, а не *Había lo hecho*.',
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Форми yo та él / ella / usted збігаються (**había**) — особу уточнює контекст або займенник.',
        },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Había lo hecho.', right: '**Lo había** hecho.', why: 'займенник перед haber' },
    {
      wrong: 'Cuando llegué, la película ya ha empezado.',
      right: 'Cuando llegué, la película ya **había empezado**.',
      why: 'минуле до минулого → pluscuamperfecto',
    },
    {
      wrong: 'Había escribido una carta.',
      right: 'Había **escrito** una carta.',
      why: 'escribir → escrito',
    },
    {
      wrong: 'Habíamos abrido la puerta.',
      right: 'Habíamos **abierto** la puerta.',
      why: 'abrir → abierto',
    },
    {
      wrong: 'Ellos había salido.',
      right: 'Ellos **habían** salido.',
      why: 'haber узгоджується з особою',
    },
    {
      wrong: 'Ella había hablada.',
      right: 'Ella había **hablado**.',
      why: 'дієприкметник не змінюється за родом',
    },
  ],
  selfCheck: [
    { prompt: 'Cuando llegué, el tren ya (salir) ___ .', answer: 'había salido' },
    {
      prompt: 'Antes de aquel día, nunca (yo, ver) ___ una película tan buena.',
      answer: 'había visto',
    },
    {
      prompt: 'Estábamos cansados porque (nosotros, trabajar) ___ todo el día.',
      answer: 'habíamos trabajado',
    },
    { prompt: 'Me dijo que ya (él, hacer) ___ la cena.', answer: 'había hecho' },
    {
      prompt: 'Cuando te conocí, ¿ya (tú, estar) ___ alguna vez en Madrid?',
      answer: 'habías estado',
    },
    {
      prompt: 'Cuando volvieron, vieron que alguien (romper) ___ la ventana.',
      answer: 'había roto',
    },
    {
      prompt: 'Cuando llegó el cartero, ¿ya (vosotros, escribir) ___ la carta?',
      answer: 'habíais escrito',
    },
  ],
};
