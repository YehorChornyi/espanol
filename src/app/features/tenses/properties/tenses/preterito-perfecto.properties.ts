import { SectionKind } from '../../enums/section-kind.enum';
import { Tense } from '../../interfaces/tense.interface';

export const TENSE: Tense = {
  id: 'preterito-perfecto',
  intro:
    'Минуле, яке ще «всередині» поточного періоду (сьогодні, цей тиждень, цей рік), або досвід у житті: *Hoy he trabajado mucho* — «Сьогодні я багато працював».',
  formula: '**haber (у presente) + participio** (he + hablado)',
  sections: [
    {
      kind: SectionKind.Usage,
      title: 'Коли вживати',
      blocks: [
        {
          type: 'list',
          items: [
            'Дія в періоді, який ще не закінчився: *Hoy he trabajado mucho.*',
            'Досвід «у житті», без конкретного моменту: *¿Has estado en Madrid?*',
            'Що вже сталося або ще ні (ya, todavía no): *Todavía no he comido.*',
            'Недавнє минуле, пов’язане із «зараз»: *He perdido las llaves.*',
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Аналог в англійській — **Present Perfect**. Запитай себе: період, у якому це сталося, уже закінчився? Ні → perfecto.',
        },
      ],
    },
    {
      kind: SectionKind.Endings,
      title: 'Утворення',
      blocks: [
        {
          type: 'table',
          caption: 'Haber (змінюється за особами)',
          persons: true,
          headers: ['', 'haber', '+ participio'],
          rows: [
            ['yo', '**he**', 'hablado'],
            ['tú', '**has**', 'comido'],
            ['él / ella / usted', '**ha**', 'vivido'],
            ['nosotros', '**hemos**', 'trabajado'],
            ['vosotros', '**habéis**', 'salido'],
            ['ellos / ustedes', '**han**', 'terminado'],
          ],
        },
        {
          type: 'table',
          caption: 'Закінчення дієприкметника (не змінюються)',
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
        {
          type: 'paragraph',
          text: 'Дієприкметник один для всіх осіб: *he hablado, hemos hablado*.',
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
            ['yo', 'he habl**ado**', 'he com**ido**', 'he viv**ido**'],
            ['tú', 'has habl**ado**', 'has com**ido**', 'has viv**ido**'],
            ['él / ella / usted', 'ha habl**ado**', 'ha com**ido**', 'ha viv**ido**'],
            ['nosotros', 'hemos habl**ado**', 'hemos com**ido**', 'hemos viv**ido**'],
            ['vosotros', 'habéis habl**ado**', 'habéis com**ido**', 'habéis viv**ido**'],
            ['ellos / ustedes', 'han habl**ado**', 'han com**ido**', 'han viv**ido**'],
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
          text: 'Haber відмінюється завжди однаково — неправильним буває лише дієприкметник.',
        },
      ],
      groups: [
        {
          title: 'Ходові неправильні дієприкметники',
          rule: 'Ці форми треба просто запам’ятати: *he hecho*, *has visto*, *hemos vuelto*.',
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
        {
          title: 'Префікси зберігають неправильність',
          rule: 'Дієслово з префіксом має такий самий неправильний дієприкметник, як і базове: hacer → hecho, deshacer → des**hecho**.',
          table: {
            type: 'table',
            headers: ['Базове', 'З префіксом', 'Дієприкметник'],
            rows: [
              ['hacer → hecho', 'deshacer', 'des**hecho**'],
              ['volver → vuelto', 'devolver', 'de**vuelto**'],
              ['cubrir → cubierto', 'descubrir', 'des**cubierto**'],
              ['poner → puesto', 'proponer', 'pro**puesto**'],
              ['poner → puesto', 'componer', 'com**puesto**'],
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
            ['hoy', 'сьогодні'],
            ['esta mañana', 'сьогодні вранці'],
            ['esta semana / este mes / este año', 'цього тижня / місяця / року'],
            ['ya', 'вже'],
            ['todavía no / aún no', 'ще не'],
            ['alguna vez', 'колись (у житті)'],
            ['nunca', 'ніколи'],
            ['últimamente', 'останнім часом'],
            ['hace un rato', 'недавно, трохи раніше'],
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
            { es: 'Hoy **he trabajado** mucho.', uk: 'Сьогодні я багато працював.' },
            { es: '¿**Has estado** en Madrid?', uk: 'Ти бував у Мадриді?' },
            { es: 'Todavía no **he comido**.', uk: 'Я ще не їв.' },
            { es: 'Nunca **he visto** la nieve.', uk: 'Я ніколи не бачив снігу.' },
            { es: 'Ya lo **he hecho**.', uk: 'Я вже це зробив.' },
            { es: 'Esta semana **hemos vuelto** tarde.', uk: 'Цього тижня ми поверталися пізно.' },
          ],
        },
      ],
    },
    {
      kind: SectionKind.Comparison,
      title: 'Perfecto vs Indefinido — як вибрати',
      blocks: [
        {
          type: 'paragraph',
          text: 'Запитай себе: **період, у якому це сталося, уже закінчився?** Так → indefinido. Ні (сьогодні, цей тиждень, «у житті») → perfecto.',
        },
        {
          type: 'table',
          headers: ['Pretérito perfecto (he hablado)', 'Pretérito indefinido (hablé)'],
          rows: [
            ['hoy, esta mañana, esta semana, este mes, este año', 'ayer, anoche, anteayer'],
            ['ya, todavía no, aún no', 'la semana pasada, el mes pasado, el año pasado'],
            ['alguna vez, nunca, siempre (досвід)', 'el lunes, en 2019, en agosto'],
            ['últimamente, hace un rato', 'hace dos años, hace tres días'],
          ],
        },
        {
          type: 'examples',
          items: [
            {
              es: 'Hoy **he comido** paella.',
              uk: 'Сьогодні я їв паелью (сьогодні ще не скінчилося).',
            },
            {
              es: 'Ayer **comí** paella.',
              uk: 'Учора я їв паелью (учорашній день уже скінчився).',
            },
            { es: 'Este año **he viajado** mucho.', uk: 'Цього року я багато подорожував.' },
            { es: 'El año pasado **viajé** mucho.', uk: 'Торік я багато подорожував.' },
            { es: '¿**Has estado** en Japón?', uk: 'Ти бував у Японії? (узагалі в житті)' },
            {
              es: '¿**Estuviste** en Japón el verano pasado?',
              uk: 'Ти був у Японії минулого літа?',
            },
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'У більшості регіонів Іспанії цієї різниці чітко дотримуються. У Латинській Америці, на Канарах, у Галісії та Астурії частіше кажуть indefinido майже всюди (*Hoy comí paella*) — не лякайся, якщо почуєш.',
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
          text: 'Між haber і дієприкметником нічого не став: *Ya lo he hecho*, а не *He lo hecho*.',
        },
        {
          type: 'note',
          tone: 'warning',
          text: 'Займенник стоїть **перед haber**: *Lo he visto*, *Me he levantado*, *No se lo he dicho*.',
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'У стандартній іспанській Іспанії *hoy*, *esta semana*, *ya* вимагають perfecto. Регіональні відмінності — у розділі «Perfecto vs Indefinido» вище.',
        },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Ayer he ido al cine.', right: 'Ayer **fui** al cine.', why: 'ayer → indefinido' },
    {
      wrong: 'Hoy fui al cine. (в Іспанії)',
      right: 'Hoy **he ido** al cine.',
      why: 'hoy → perfecto',
    },
    { wrong: 'He lo hecho.', right: '**Lo he** hecho.', why: 'займенник перед haber' },
    { wrong: 'He hacido los deberes.', right: 'He **hecho** los deberes.', why: 'hacer → hecho' },
    { wrong: 'Hemos volvido a casa.', right: 'Hemos **vuelto** a casa.', why: 'volver → vuelto' },
    {
      wrong: '¿Has leido el libro?',
      right: '¿Has **leído** el libro?',
      why: 'після a / e / o — -ído зі знаком наголосу',
    },
  ],
  selfCheck: [
    { prompt: 'Hoy (nosotros, comer) ___ en casa.', answer: 'hemos comido' },
    { prompt: '¿(Tú, estar) ___ alguna vez en Portugal?', answer: 'Has estado' },
    { prompt: 'Todavía no (yo, hacer) ___ los deberes.', answer: 'he hecho' },
    { prompt: 'Esta semana (yo, ver) ___ dos películas.', answer: 'he visto' },
    { prompt: 'Los niños ya (volver) ___ del colegio.', answer: 'han vuelto' },
    { prompt: '¿Quién (abrir) ___ la ventana? (щойно)', answer: 'ha abierto' },
    { prompt: '¿Ya (vosotros, escribir) ___ el correo?', answer: 'habéis escrito' },
  ],
};
