import { SectionKind } from '../../enums/section-kind.enum';
import { Tense } from '../../interfaces/tense.interface';

export const TENSE: Tense = {
  id: 'presente-subjuntivo',
  intro:
    'Спосіб для бажань, емоцій, сумнівів і оцінок — того, що не подається як факт. Зазвичай стоїть у підрядному реченні, найчастіше після *que*: *Quiero que vengas* — «Хочу, щоб ти прийшов».',
  formula:
    'yo з presente без **-o** + «протилежні» закінчення (hablo → habl**e**, como → com**a**)',
  sections: [
    {
      kind: SectionKind.Usage,
      title: 'Коли вживати',
      blocks: [
        {
          type: 'paragraph',
          text: 'Subjuntivo з’являється, коли головне речення виражає не факт, а ставлення до дії. Підмети в двох частинах речення зазвичай різні.',
        },
        {
          type: 'list',
          items: [
            'Бажання та вплив після *que*: *Quiero que vengas.* *Espero que estés bien.*',
            'Емоції: *Me alegra que estés aquí.* *Siento que no puedas venir.*',
            'Сумнів і заперечення: *No creo que llueva.* *Dudo que lo sepa.*',
            'Безособові оцінки: *Es importante que lo hagas.* *Es necesario que estudiemos.*',
            'Після *ojalá* — «хоч би, дай Боже»: *Ojalá haga sol mañana.*',
            'Після *cuando* зі значенням майбутнього: *Cuando llegues, llámame.*',
            'Мета після *para que*: *Te lo explico para que lo entiendas.*',
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Мнемоніка **WEIRDO**: W — бажання (*wishes*), E — емоції, I — безособові оцінки (*es importante que*), R — поради й вимоги (*recomiendo que*, *pido que*), D — сумнів і заперечення (*dudo que*, *no creo que*), O — *ojalá*.',
        },
      ],
    },
    {
      kind: SectionKind.Endings,
      title: 'Закінчення',
      blocks: [
        {
          type: 'paragraph',
          text: 'Візьми форму **yo** з presente, відкинь **-o** і додай закінчення з «протилежною» голосною: дієслова на -ar отримують **-e**, а на -er / -ir — **-a**.',
        },
        {
          type: 'table',
          persons: true,
          headers: ['', '-ar', '-er / -ir'],
          rows: [
            ['yo', '**-e**', '**-a**'],
            ['tú', '**-es**', '**-as**'],
            ['él / ella / usted', '**-e**', '**-a**'],
            ['nosotros', '**-emos**', '**-amos**'],
            ['vosotros', '**-éis**', '**-áis**'],
            ['ellos / ustedes', '**-en**', '**-an**'],
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
            ['yo', 'habl**e**', 'com**a**', 'viv**a**'],
            ['tú', 'habl**es**', 'com**as**', 'viv**as**'],
            ['él / ella / usted', 'habl**e**', 'com**a**', 'viv**a**'],
            ['nosotros', 'habl**emos**', 'com**amos**', 'viv**amos**'],
            ['vosotros', 'habl**éis**', 'com**áis**', 'viv**áis**'],
            ['ellos / ustedes', 'habl**en**', 'com**an**', 'viv**an**'],
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
          text: 'Більшість «неправильностей» успадковується з форми **yo** у presente. Повністю неправильних дієслів лише шість.',
        },
      ],
      groups: [
        {
          title: 'Повністю неправильні',
          rule: 'Їхня форма yo в presente не закінчується на -o, тому ці форми треба запам’ятати.',
          table: {
            type: 'table',
            headers: ['Дієслово', 'yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos'],
            rows: [
              ['ser', 'sea', 'seas', 'sea', 'seamos', 'seáis', 'sean'],
              ['estar', 'esté', 'estés', 'esté', 'estemos', 'estéis', 'estén'],
              ['ir', 'vaya', 'vayas', 'vaya', 'vayamos', 'vayáis', 'vayan'],
              ['haber', 'haya', 'hayas', 'haya', 'hayamos', 'hayáis', 'hayan'],
              ['saber', 'sepa', 'sepas', 'sepa', 'sepamos', 'sepáis', 'sepan'],
              ['dar', 'dé', 'des', 'dé', 'demos', 'deis', 'den'],
            ],
          },
        },
        {
          title: 'Основа з yo',
          rule: 'Неправильна основа yo переходить в усі особи: tengo → tenga, tengas, tengamos…',
          table: {
            type: 'table',
            headers: ['Дієслово', 'yo (presente)', 'yo (subjuntivo)'],
            rows: [
              ['tener', 'tengo', '**tenga**'],
              ['hacer', 'hago', '**haga**'],
              ['poner', 'pongo', '**ponga**'],
              ['decir', 'digo', '**diga**'],
              ['venir', 'vengo', '**venga**'],
              ['salir', 'salgo', '**salga**'],
              ['conocer', 'conozco', '**conozca**'],
              ['traer', 'traigo', '**traiga**'],
              ['oír', 'oigo', '**oiga**'],
              ['ver', 'veo', '**vea**'],
            ],
          },
        },
        {
          title: 'Зміна кореня',
          rule: 'Як і в presente, nosotros і vosotros зазвичай без зміни. Але дієслова на **-ir** змінюються й там: o → u, e → i (durmamos, pidamos, sintamos).',
          table: {
            type: 'table',
            headers: ['Дієслово', 'yo', 'nosotros', 'vosotros', 'ellos'],
            rows: [
              ['querer', 'qu**ie**ra', 'queramos', 'queráis', 'qu**ie**ran'],
              ['poder', 'p**ue**da', 'podamos', 'podáis', 'p**ue**dan'],
              ['dormir', 'd**ue**rma', 'd**u**rmamos', 'd**u**rmáis', 'd**ue**rman'],
              ['pedir', 'p**i**da', 'p**i**damos', 'p**i**dáis', 'p**i**dan'],
              ['sentir', 's**ie**nta', 's**i**ntamos', 's**i**ntáis', 's**ie**ntan'],
            ],
          },
        },
        {
          title: 'Орфографія',
          rule: 'Щоб зберегти вимову приголосної, змінюється написання в усіх особах.',
          table: {
            type: 'table',
            headers: ['Зміна', 'Дієслово', 'yo (subjuntivo)'],
            rows: [
              ['-car → -que', 'buscar', 'bus**que**'],
              ['-gar → -gue', 'pagar', 'pa**gue**'],
              ['-zar → -ce', 'empezar', 'empie**ce**'],
              ['-ger → -ja', 'coger', 'co**ja**'],
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
            ['quiero que', 'Quiero que **vengas**.'],
            ['espero que', 'Espero que **estés** bien.'],
            ['me alegra que', 'Me alegra que **estés** aquí.'],
            ['no creo que', 'No creo que **llueva**.'],
            ['dudo que', 'Dudo que lo **sepa**.'],
            ['es importante que', 'Es importante que lo **hagas**.'],
            ['es necesario que', 'Es necesario que **estudiemos**.'],
            ['ojalá', 'Ojalá **haga** sol.'],
            ['cuando (майбутнє)', 'Cuando **llegues**, llámame.'],
            ['para que', 'Te lo digo para que lo **sepas**.'],
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
            { es: 'Quiero que **vayas** al médico.', uk: 'Я хочу, щоб ти пішов до лікаря.' },
            {
              es: 'Espero que **tengas** un buen día.',
              uk: 'Сподіваюся, що в тебе буде гарний день.',
            },
            { es: 'No creo que **sea** verdad.', uk: 'Не думаю, що це правда.' },
            { es: 'Es importante que **haya** agua.', uk: 'Важливо, щоб була вода.' },
            { es: 'Ojalá **podamos** vernos pronto.', uk: 'Хоч би ми змогли скоро побачитися.' },
            { es: 'Cuando **llegues**, llámame.', uk: 'Коли приїдеш, подзвони мені.' },
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
          text: 'Той самий підмет — інфінітив: *Quiero ir.* Різні підмети — *que* + subjuntivo: *Quiero que vayas.*',
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Упевненість — indicativo: *Creo que viene.* Заперечення чи сумнів — subjuntivo: *No creo que venga.*',
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Після *cuando* про майбутнє ніколи не став futuro: *Cuando tenga tiempo* (а не *cuando tendré*). Про звичку — indicativo: *Cuando tengo tiempo, leo.*',
        },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'Quiero que vienes.',
      right: 'Quiero que **vengas**.',
      why: 'бажання щодо іншої особи → subjuntivo',
    },
    { wrong: 'Quiero que yo vaya.', right: 'Quiero **ir**.', why: 'той самий підмет → інфінітив' },
    {
      wrong: 'No creo que es verdad.',
      right: 'No creo que **sea** verdad.',
      why: 'заперечення думки → subjuntivo',
    },
    {
      wrong: 'Cuando llegarás, llámame.',
      right: 'Cuando **llegues**, llámame.',
      why: 'cuando + майбутнє → subjuntivo, не futuro',
    },
    {
      wrong: 'Ojalá dormamos bien.',
      right: 'Ojalá **durmamos** bien.',
      why: 'dormir: o → u в nosotros',
    },
    {
      wrong: 'Es necesario que buscas trabajo.',
      right: 'Es necesario que **busques** trabajo.',
      why: '-car → -que, і оцінка → subjuntivo',
    },
  ],
  selfCheck: [
    { prompt: 'Quiero que (tú, venir) ___ a mi fiesta.', answer: 'vengas' },
    { prompt: 'Espero que (vosotros, estar) ___ bien.', answer: 'estéis' },
    { prompt: 'No creo que (ella, saber) ___ la respuesta.', answer: 'sepa' },
    { prompt: 'Es importante que (nosotros, hacer) ___ los deberes.', answer: 'hagamos' },
    { prompt: 'Ojalá (haber) ___ entradas.', answer: 'haya' },
    { prompt: 'Cuando (tú, ir) ___ a Madrid, visita el Prado.', answer: 'vayas' },
    { prompt: 'Te lo explico para que lo (tú, entender) ___ .', answer: 'entiendas' },
    { prompt: 'Es necesario que (nosotros, pedir) ___ ayuda.', answer: 'pidamos' },
  ],
};
