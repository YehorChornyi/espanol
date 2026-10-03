import { SectionKind } from '../../enums/section-kind.enum';
import { Tense } from '../../interfaces/tense.interface';

export const TENSE: Tense = {
  id: 'futuro-perfecto',
  intro:
    'Дія, що вже завершиться до певного моменту в майбутньому: *Para el lunes habré terminado* — «До понеділка я вже закінчу». Також — припущення про недавнє минуле.',
  formula: '**haber (futuro) + participio** (habré + hablado)',
  sections: [
    {
      kind: SectionKind.Usage,
      title: 'Коли вживати',
      blocks: [
        {
          type: 'list',
          items: [
            'Дія, завершена до моменту в майбутньому: *Para el lunes habré terminado.* — «До понеділка я вже закінчу».',
            'Припущення про недавнє минуле: *¿Dónde está Ana? — Habrá salido.* — «Мабуть, вийшла».',
            'Здогад про причину: *No contesta… Se habrá dormido.* — «Мабуть, заснув».',
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Аналог в англійській — **Future Perfect**: *will have spoken* = *habré hablado*.',
        },
      ],
    },
    {
      kind: SectionKind.Endings,
      title: 'Haber + дієприкметник',
      blocks: [
        {
          type: 'paragraph',
          text: 'Haber стоїть у futuro (неправильна основа habr-) і змінюється за особами; дієприкметник не змінюється.',
        },
        {
          type: 'table',
          persons: true,
          headers: ['', 'haber', '+ participio'],
          rows: [
            ['yo', '**habré**', 'hablado'],
            ['tú', '**habrás**', 'comido'],
            ['él / ella / usted', '**habrá**', 'vivido'],
            ['nosotros', '**habremos**', 'trabajado'],
            ['vosotros', '**habréis**', 'salido'],
            ['ellos / ustedes', '**habrán**', 'terminado'],
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
            ['yo', '**habré** habl**ado**', '**habré** com**ido**', '**habré** viv**ido**'],
            ['tú', '**habrás** habl**ado**', '**habrás** com**ido**', '**habrás** viv**ido**'],
            [
              'él / ella / usted',
              '**habrá** habl**ado**',
              '**habrá** com**ido**',
              '**habrá** viv**ido**',
            ],
            [
              'nosotros',
              '**habremos** habl**ado**',
              '**habremos** com**ido**',
              '**habremos** viv**ido**',
            ],
            [
              'vosotros',
              '**habréis** habl**ado**',
              '**habréis** com**ido**',
              '**habréis** viv**ido**',
            ],
            [
              'ellos / ustedes',
              '**habrán** habl**ado**',
              '**habrán** com**ido**',
              '**habrán** viv**ido**',
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
          text: 'Haber у futuro має неправильну основу **habr-** (без e). Неправильні дієприкметники — **ті самі, що й у pretérito perfecto**.',
        },
      ],
      groups: [
        {
          title: 'Ходові неправильні дієприкметники',
          rule: 'Ті самі форми, що й у pretérito perfecto: *he hecho* → *habré hecho*.',
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
            ['para mañana', 'до завтра'],
            ['para el lunes / para las cinco', 'до понеділка / до п’ятої'],
            ['para entonces', 'на той час'],
            ['dentro de un mes', 'через місяць'],
            ['antes de…', 'до того як…'],
            ['ya', 'уже'],
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
              es: 'Para el lunes **habré terminado** el informe.',
              uk: 'До понеділка я вже закінчу звіт.',
            },
            { es: '¿Dónde está Ana? — **Habrá salido**.', uk: 'Де Ана? — Мабуть, вийшла.' },
            {
              es: 'Dentro de un mes **habremos vuelto** de vacaciones.',
              uk: 'Через місяць ми вже повернемося з відпустки.',
            },
            { es: 'Para entonces ya lo **habrán hecho**.', uk: 'На той час вони вже це зроблять.' },
            { es: 'No contesta… Se **habrá dormido**.', uk: 'Не відповідає… Мабуть, заснув.' },
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
          text: 'Пара припущень: futuro simple — про теперішнє (*Estará en casa* — «Мабуть, удома»), futuro perfecto — про недавнє минуле (*Habrá salido* — «Мабуть, вийшла»).',
        },
        {
          type: 'note',
          tone: 'warning',
          text: 'Між haber і дієприкметником нічого не став: *Ya lo habré hecho*, а не *Habré lo hecho*.',
        },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Haberé terminado.', right: '**Habré** terminado.', why: 'haber → habr- (випадає e)' },
    { wrong: 'Habré lo hecho.', right: '**Lo habré** hecho.', why: 'займенник перед haber' },
    {
      wrong: 'Para mañana habré escribido.',
      right: 'Para mañana habré **escrito**.',
      why: 'escribir → escrito',
    },
    {
      wrong: 'Ellos habrá vuelto.',
      right: 'Ellos **habrán** vuelto.',
      why: 'haber узгоджується з особою',
    },
    {
      wrong: 'Cuando llegues, ya cenaré.',
      right: 'Cuando llegues, ya **habré cenado**.',
      why: 'завершено до моменту → futuro perfecto',
    },
  ],
  selfCheck: [
    { prompt: 'Para el lunes ya (yo, terminar) ___ el proyecto.', answer: 'habré terminado' },
    {
      prompt: '¿Dónde está Ana? — (Ella, salir) ___ . (припущення про минуле)',
      answer: 'Habrá salido',
    },
    { prompt: 'Para las cinco ya (nosotros, comer) ___ .', answer: 'habremos comido' },
    { prompt: 'Dentro de un año ya (ellos, volver) ___ a España.', answer: 'habrán vuelto' },
    { prompt: 'Para mañana ya (tú, hacer) ___ los deberes.', answer: 'habrás hecho' },
    { prompt: 'Para entonces ya (vosotros, ver) ___ la película.', answer: 'habréis visto' },
  ],
};
