import { SectionKind } from '../../enums/section-kind.enum';
import { Tense } from '../../interfaces/tense.interface';

export const TENSE: Tense = {
  id: 'imperfecto-subjuntivo',
  intro:
    'Subjuntivo в минулому та в нереальних умовах. Головне вживання — «якби…»: *Si tuviera dinero, compraría una casa* — «Якби я мав гроші, купив би будинок».',
  formula: 'ellos з indefinido без **-ron** + **-ra** / **-se** (hablaron → habla**ra**)',
  sections: [
    {
      kind: SectionKind.Usage,
      title: 'Коли вживати',
      blocks: [
        {
          type: 'list',
          items: [
            'Нереальна умова після *si* (у головному реченні — condicional): *Si tuviera dinero, compraría una casa.*',
            'Бажання, вплив, емоції в минулому (головне дієслово в минулому чи condicional): *Quería que vinieras.*',
            'Малоймовірне або неможливе бажання з *ojalá*: *Ojalá fuera verdad.*',
            'Після *como si* — «ніби, наче»: *Habla como si lo supiera todo.*',
            'Ввічливе прохання з *quisiera*: *Quisiera una mesa para dos.*',
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Тригери ті самі, що й для presente de subjuntivo (бажання, емоції, сумнів, оцінки), — лише головне речення стоїть у минулому (або в condicional): *Quiero que vengas* → *Quería que vinieras.*',
        },
      ],
    },
    {
      kind: SectionKind.Endings,
      title: 'Закінчення',
      blocks: [
        {
          type: 'paragraph',
          text: 'Візьми форму **ellos** з indefinido (hablaron, tuvieron), відкинь **-ron** і додай закінчення. Є два рівноцінні набори: на **-ra** та на **-se**. У nosotros голосна перед закінченням отримує знак наголосу: habl**á**ramos, tuvi**é**ramos.',
        },
        {
          type: 'table',
          persons: true,
          caption: 'Закінчення на -ra',
          headers: ['', '-ra'],
          rows: [
            ['yo', '**-ra**'],
            ['tú', '**-ras**'],
            ['él / ella / usted', '**-ra**'],
            ['nosotros', '**-ramos**'],
            ['vosotros', '**-rais**'],
            ['ellos / ustedes', '**-ran**'],
          ],
        },
        {
          type: 'table',
          persons: true,
          caption: 'Закінчення на -se',
          headers: ['', '-se'],
          rows: [
            ['yo', '**-se**'],
            ['tú', '**-ses**'],
            ['él / ella / usted', '**-se**'],
            ['nosotros', '**-semos**'],
            ['vosotros', '**-seis**'],
            ['ellos / ustedes', '**-sen**'],
          ],
        },
      ],
    },
    {
      kind: SectionKind.Conjugation,
      title: 'Приклад відмінювання',
      blocks: [
        {
          type: 'paragraph',
          text: 'hablaron → habla-, comieron → comie-, vivieron → vivie-.',
        },
        {
          type: 'table',
          persons: true,
          caption: 'Форма на -ra',
          headers: ['', '-ar (hablar)', '-er (comer)', '-ir (vivir)'],
          rows: [
            ['yo', 'habla**ra**', 'comie**ra**', 'vivie**ra**'],
            ['tú', 'habla**ras**', 'comie**ras**', 'vivie**ras**'],
            ['él / ella / usted', 'habla**ra**', 'comie**ra**', 'vivie**ra**'],
            ['nosotros', 'hablá**ramos**', 'comié**ramos**', 'vivié**ramos**'],
            ['vosotros', 'habla**rais**', 'comie**rais**', 'vivie**rais**'],
            ['ellos / ustedes', 'habla**ran**', 'comie**ran**', 'vivie**ran**'],
          ],
        },
        {
          type: 'table',
          persons: true,
          caption: 'Форма на -se',
          headers: ['', 'hablar'],
          rows: [
            ['yo', 'habla**se**'],
            ['tú', 'habla**ses**'],
            ['él / ella / usted', 'habla**se**'],
            ['nosotros', 'hablá**semos**'],
            ['vosotros', 'habla**seis**'],
            ['ellos / ustedes', 'habla**sen**'],
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
          text: 'Окремих неправильних форм немає: усе успадковується з **ellos** в indefinido. Знаєш tuvieron — знаєш і tuviera.',
        },
      ],
      groups: [
        {
          title: 'Неправильні з indefinido',
          rule: 'Неправильна основа indefinido переходить в усі особи: tuviera, tuvieras, tuviéramos…',
          table: {
            type: 'table',
            headers: ['Дієслово', 'ellos (indefinido)', 'yo'],
            rows: [
              ['tener', 'tuvieron', '**tuviera**'],
              ['estar', 'estuvieron', '**estuviera**'],
              ['hacer', 'hicieron', '**hiciera**'],
              ['decir', 'dijeron', '**dijera**'],
              ['poder', 'pudieron', '**pudiera**'],
              ['querer', 'quisieron', '**quisiera**'],
              ['saber', 'supieron', '**supiera**'],
              ['poner', 'pusieron', '**pusiera**'],
              ['venir', 'vinieron', '**viniera**'],
              ['traer', 'trajeron', '**trajera**'],
              ['haber', 'hubieron', '**hubiera**'],
              ['dar', 'dieron', '**diera**'],
            ],
          },
        },
        {
          title: 'ser / ir: fuera',
          rule: 'Як і в indefinido (fueron), ser та ir мають однакові форми — значення зрозуміле з контексту.',
          table: {
            type: 'table',
            persons: true,
            headers: ['', 'ser / ir (-ra)', 'ser / ir (-se)'],
            rows: [
              ['yo', 'fuera', 'fuese'],
              ['tú', 'fueras', 'fueses'],
              ['él / ella / usted', 'fuera', 'fuese'],
              ['nosotros', 'fuéramos', 'fuésemos'],
              ['vosotros', 'fuerais', 'fueseis'],
              ['ellos / ustedes', 'fueran', 'fuesen'],
            ],
          },
        },
        {
          title: 'Зміна кореня з indefinido',
          rule: 'Дієслова на -ir, що змінюють корінь в ellos (pidieron, durmieron), зберігають зміну в усіх особах. Дієслова на -er / -ir з основою на голосну пишуть **y**: leyeron → leyera.',
          table: {
            type: 'table',
            headers: ['Дієслово', 'ellos (indefinido)', 'yo'],
            rows: [
              ['pedir', 'p**i**dieron', 'p**i**diera'],
              ['dormir', 'd**u**rmieron', 'd**u**rmiera'],
              ['leer', 'le**y**eron', 'le**y**era'],
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
          headers: ['Тригер', 'Приклад'],
          rows: [
            ['si (нереальна умова)', 'Si **tuviera** tiempo, viajaría más.'],
            ['quería que / quisiera que', 'Quería que **vinieras**.'],
            ['me gustaría que', 'Me gustaría que me **ayudaras**.'],
            ['ojalá (малоймовірне)', 'Ojalá **fuera** verdad.'],
            ['como si', 'Habla como si lo **supiera** todo.'],
            ['era importante que', 'Era importante que lo **hiciéramos**.'],
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
              es: 'Si **tuviera** dinero, compraría una casa.',
              uk: 'Якби я мав гроші, купив би будинок.',
            },
            {
              es: 'Mi madre quería que **estudiara** medicina.',
              uk: 'Мама хотіла, щоб я вивчав медицину.',
            },
            { es: 'Ojalá **fuera** verdad.', uk: 'Якби ж то це було правдою.' },
            {
              es: 'Me miró como si no me **conociera**.',
              uk: 'Він подивився на мене, ніби не знав мене.',
            },
            {
              es: 'Si **hiciera** buen tiempo, iríamos a la playa.',
              uk: 'Якби була гарна погода, ми б пішли на пляж.',
            },
            {
              es: '**Quisiera** hablar con el director.',
              uk: 'Я хотів би поговорити з директором.',
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
          text: 'Форми на **-ra** і **-se** взаємозамінні: *si tuviera* = *si tuviese* (крім ввічливого *quisiera*). У розмовній мові частіше чути -ra.',
        },
        {
          type: 'note',
          tone: 'warning',
          text: 'Реальна умова — *si* + presente: *Si tengo tiempo, te llamo.* Нереальна — *si* + imperfecto de subjuntivo: *Si tuviera tiempo, te llamaría.* Після умовного *si* ніколи не став condicional.',
        },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Si tendría dinero, compraría una casa.',
      right: 'Si **tuviera** dinero, compraría una casa.',
      why: 'після si — subjuntivo, не condicional',
    },
    {
      wrong: 'Quería que vienes.',
      right: 'Quería que **vinieras**.',
      why: 'минуле бажання → imperfecto de subjuntivo',
    },
    {
      wrong: 'Si yo teniera tiempo…',
      right: 'Si yo **tuviera** tiempo…',
      why: 'основа з indefinido: tuvieron',
    },
    {
      wrong: 'Ojalá hablaramos español.',
      right: 'Ojalá **habláramos** español.',
      why: 'у nosotros потрібен знак наголосу',
    },
    {
      wrong: 'Si sería verdad…',
      right: 'Si **fuera** verdad…',
      why: 'ser → fuera, не condicional',
    },
    {
      wrong: 'Me pidió que le deciera la verdad.',
      right: 'Me pidió que le **dijera** la verdad.',
      why: 'decir: dijeron → dijera',
    },
  ],
  selfCheck: [
    { prompt: 'Si (yo, tener) ___ más tiempo, aprendería alemán.', answer: 'tuviera' },
    { prompt: 'Ojalá (ser) ___ verdad, pero sé que no lo es.', answer: 'fuera' },
    { prompt: 'Mis padres querían que (yo, hacer) ___ deporte.', answer: 'hiciera' },
    { prompt: 'Él habla como si lo (saber) ___ todo.', answer: 'supiera' },
    { prompt: 'Si (nosotros, vivir) ___ en la playa, nadaríamos cada día.', answer: 'viviéramos' },
    { prompt: 'Te pedí que me (tú, decir) ___ la verdad.', answer: 'dijeras' },
    { prompt: 'Si (vosotros, poder) ___ venir, sería genial.', answer: 'pudierais' },
    { prompt: 'Me alegró que (ellos, estar) ___ bien.', answer: 'estuvieran' },
  ],
};
