import { SectionKind } from '../../enums/section-kind.enum';
import { Tense } from '../../interfaces/tense.interface';

export const TENSE: Tense = {
  id: 'preterito-indefinido',
  intro:
    'Завершена дія в закритому періоді минулого: учора, торік, у 2020. Це основний час для розповіді «що було».',
  formula: '**основа + закінчення** (habl- + -é)',
  sections: [
    {
      kind: SectionKind.Usage,
      title: 'Коли вживати',
      blocks: [
        {
          type: 'list',
          items: [
            'Завершена дія в закритому періоді минулого: *Ayer fui al médico.*',
            'Дія в конкретний момент або рік: *En 2022 me mudé a España.*',
            'Послідовність подій у розповіді: *Llegué, abrí la puerta y vi a Ana.*',
            'Дія з чітко обмеженою тривалістю: *Viví en Madrid tres años.*',
            'Дія, що перериває інший процес у минулому: *Leía cuando sonó el teléfono.*',
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Аналог в англійській — **Past Simple**. Головне питання: **період, у якому це сталося, уже закінчився?** Так → indefinido.',
        },
      ],
    },
    {
      kind: SectionKind.Endings,
      title: 'Закінчення',
      blocks: [
        {
          type: 'paragraph',
          text: 'Відкинь -ar / -er / -ir і додай закінчення: habl-, com-, viv-.',
        },
        {
          type: 'table',
          persons: true,
          headers: [
            '',
            '-ar',
            '-er / -ir',
            'Неправильні з особливою основою (tuv-, estuv-, hic-, pud-…)',
          ],
          rows: [
            ['yo', '**-é**', '**-í**', '**-e**'],
            ['tú', '**-aste**', '**-iste**', '**-iste**'],
            ['él / ella / usted', '**-ó**', '**-ió**', '**-o**'],
            ['nosotros', '**-amos**', '**-imos**', '**-imos**'],
            ['vosotros', '**-asteis**', '**-isteis**', '**-isteis**'],
            [
              'ellos / ustedes',
              '**-aron**',
              '**-ieron**',
              '**-ieron** (після j: -eron → dijeron, trajeron)',
            ],
          ],
        },
        {
          type: 'paragraph',
          text: 'У -er та -ir закінчення однакові. У неправильних з особливою основою немає знаків наголосу: tuve, tuvo. Увага: hacer → hice, але **hizo** (c → z, щоб зберегти звук).',
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
            ['yo', 'habl**é**', 'com**í**', 'viv**í**'],
            ['tú', 'habl**aste**', 'com**iste**', 'viv**iste**'],
            ['él / ella / usted', 'habl**ó**', 'com**ió**', 'viv**ió**'],
            ['nosotros', 'habl**amos**', 'com**imos**', 'viv**imos**'],
            ['vosotros', 'habl**asteis**', 'com**isteis**', 'viv**isteis**'],
            ['ellos / ustedes', 'habl**aron**', 'com**ieron**', 'viv**ieron**'],
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
          text: 'Головні неправильні. Групи 1–4 — без знаків наголосу! Закінчення груп 1–3: **-e, -iste, -o, -imos, -isteis, -ieron** (у групі 3 в ellos — **-eron**).',
        },
      ],
      groups: [
        {
          title: '1. Основа на -u-',
          rule: 'Закінчення груп 1–3: **-e, -iste, -o, -imos, -isteis, -ieron** (у групі 3 — **-eron**) — без знаків наголосу.',
          table: {
            type: 'table',
            headers: ['Дієслово', 'Основа', 'yo', 'él', 'ellos'],
            rows: [
              ['estar', 'estuv-', 'estuve', 'estuvo', 'estuvieron'],
              ['tener', 'tuv-', 'tuve', 'tuvo', 'tuvieron'],
              ['andar', 'anduv-', 'anduve', 'anduvo', 'anduvieron'],
              ['poder', 'pud-', 'pude', 'pudo', 'pudieron'],
              ['poner', 'pus-', 'puse', 'puso', 'pusieron'],
              ['saber', 'sup-', 'supe', 'supo', 'supieron'],
              ['caber', 'cup-', 'cupe', 'cupo', 'cupieron'],
              ['haber', 'hub-', 'hube', 'hubo', 'hubieron'],
            ],
          },
        },
        {
          title: 'Повне відмінювання з особливою основою',
          rule: 'До основи додай **-e, -iste, -o, -imos, -isteis, -ieron** (після j — **-eron**). Знаків наголосу немає.',
          table: {
            type: 'table',
            persons: true,
            headers: ['', 'tener (tuv-)', 'hacer (hic-)', 'decir (dij-)'],
            rows: [
              ['yo', 'tuv**e**', 'hic**e**', 'dij**e**'],
              ['tú', 'tuv**iste**', 'hic**iste**', 'dij**iste**'],
              ['él / ella / usted', 'tuv**o**', 'hi**zo**', 'dij**o**'],
              ['nosotros', 'tuv**imos**', 'hic**imos**', 'dij**imos**'],
              ['vosotros', 'tuv**isteis**', 'hic**isteis**', 'dij**isteis**'],
              ['ellos / ustedes', 'tuv**ieron**', 'hic**ieron**', 'dij**eron**'],
            ],
          },
        },
        {
          title: '2. Основа на -i-',
          rule: 'Увага: hacer → hice, але **hizo** (c → z, щоб зберегти звук).',
          table: {
            type: 'table',
            headers: ['Дієслово', 'Основа', 'yo', 'él', 'ellos'],
            rows: [
              ['hacer', 'hic-', 'hice', '**hizo**', 'hicieron'],
              ['querer', 'quis-', 'quise', 'quiso', 'quisieron'],
              ['venir', 'vin-', 'vine', 'vino', 'vinieron'],
            ],
          },
        },
        {
          title: '3. Основа на -j- (ellos: -eron, без i)',
          rule: 'Так само всі дієслова на **-ducir**: reducir → reduje, introducir → introduje.',
          table: {
            type: 'table',
            headers: ['Дієслово', 'Основа', 'yo', 'él', 'ellos'],
            rows: [
              ['decir', 'dij-', 'dije', 'dijo', 'dijeron'],
              ['traer', 'traj-', 'traje', 'trajo', 'trajeron'],
              ['conducir', 'conduj-', 'conduje', 'condujo', 'condujeron'],
              ['traducir', 'traduj-', 'traduje', 'tradujo', 'tradujeron'],
              ['producir', 'produj-', 'produje', 'produjo', 'produjeron'],
            ],
          },
        },
        {
          title: '4. Повністю неправильні',
          rule: 'Ser та ir збігаються повністю — зміст зрозумілий із контексту: *Fui al cine* (ir) / *Fue un día largo* (ser).',
          table: {
            type: 'table',
            headers: ['Дієслово', 'yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos'],
            rows: [
              ['ser / ir', 'fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
              ['dar', 'di', 'diste', 'dio', 'dimos', 'disteis', 'dieron'],
              ['ver', 'vi', 'viste', 'vio', 'vimos', 'visteis', 'vieron'],
            ],
          },
        },
        {
          title: '5. Зміна кореня e → i, o → u',
          rule: 'Лише дієслова на **-ir**, які змінюють корінь у presente; в indefinido зміна є лише в **él** та **ellos**. Решта форм правильні.',
          table: {
            type: 'table',
            headers: ['Дієслово', 'yo', 'él', 'ellos'],
            rows: [
              ['pedir', 'pedí', 'p**i**dió', 'p**i**dieron'],
              ['repetir', 'repetí', 'rep**i**tió', 'rep**i**tieron'],
              ['servir', 'serví', 's**i**rvió', 's**i**rvieron'],
              ['seguir', 'seguí', 's**i**guió', 's**i**guieron'],
              ['sentir', 'sentí', 's**i**ntió', 's**i**ntieron'],
              ['preferir', 'preferí', 'pref**i**rió', 'pref**i**rieron'],
              ['divertirse', 'me divertí', 'se div**i**rtió', 'se div**i**rtieron'],
              ['dormir', 'dormí', 'd**u**rmió', 'd**u**rmieron'],
              ['morir', 'morí', 'm**u**rió', 'm**u**rieron'],
            ],
          },
        },
        {
          title: '6. i → y між голосними',
          rule: 'Лише в **él** та **ellos**. В інших формах leer, creer, oír, caer пишуть í: leí, leíste, leímos (але construir: construí, construiste, construimos).',
          table: {
            type: 'table',
            headers: ['Дієслово', 'yo', 'él', 'ellos'],
            rows: [
              ['leer', 'leí', 'le**y**ó', 'le**y**eron'],
              ['creer', 'creí', 'cre**y**ó', 'cre**y**eron'],
              ['oír', 'oí', 'o**y**ó', 'o**y**eron'],
              ['caer', 'caí', 'ca**y**ó', 'ca**y**eron'],
              ['construir', 'construí', 'constru**y**ó', 'constru**y**eron'],
            ],
          },
        },
        {
          title: '7. Орфографія лише в yo',
          rule: 'Змінюється лише написання, щоб зберегти звук. Решта форм правильні.',
          table: {
            type: 'table',
            headers: ['Закінчення', 'Змінюється на', 'Приклади'],
            rows: [
              ['-car', '-qué', 'buscar → busqué, tocar → toqué, sacar → saqué'],
              ['-gar', '-gué', 'pagar → pagué, llegar → llegué, jugar → jugué'],
              ['-zar', '-cé', 'empezar → empecé, almorzar → almorcé, organizar → organicé'],
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
            ['ayer', 'учора'],
            ['anoche', 'учора ввечері'],
            ['anteayer', 'позавчора'],
            ['la semana pasada', 'минулого тижня'],
            ['el mes pasado', 'минулого місяця'],
            ['el año pasado', 'торік'],
            ['el lunes', 'у понеділок (минулий)'],
            ['en 2019, en agosto', 'у 2019 році, у серпні'],
            ['hace dos años, hace tres días', 'два роки тому, три дні тому'],
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
            { es: 'Ayer **fui** al médico.', uk: 'Учора я ходив до лікаря.' },
            { es: 'En 2022 me **mudé** a España.', uk: 'У 2022 році я переїхав до Іспанії.' },
            { es: 'El sábado pasado **comimos** paella.', uk: 'Минулої суботи ми їли паелью.' },
            { es: 'Anoche Pablo **hizo** la cena.', uk: 'Учора ввечері Пабло приготував вечерю.' },
            { es: 'Ellos no me **dijeron** nada.', uk: 'Вони мені нічого не сказали.' },
            { es: 'El año pasado **tuve** mucho trabajo.', uk: 'Торік у мене було багато роботи.' },
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
            { es: 'Ayer **comí** paella.', uk: 'Учора я їв паелью (учора закрите).' },
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
          text: 'Наголос важливий: **hablo** (я говорю) ≠ **habló** (він говорив).',
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'На замітку: nosotros у -ar та -ir збігається з presente (hablamos, vivimos) — час зрозумілий із контексту: *Ayer hablamos.*',
        },
        {
          type: 'note',
          tone: 'warning',
          text: 'У неправильних з особливою основою немає знаків наголосу: **tuve**, **tuvo**, **hice**, **pude**.',
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'hacer → hice, але **hizo** (c → z, щоб зберегти звук). Так само в yo -car / -gar / -zar: *busqué*, *pagué*, *empecé*.',
        },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Él hablo.', right: 'Él **habló**.', why: 'наголос змінює час і особу' },
    { wrong: 'Ayer he ido al cine.', right: 'Ayer **fui** al cine.', why: 'ayer → indefinido' },
    {
      wrong: 'Yo tuví un problema.',
      right: 'Yo **tuve** un problema.',
      why: 'особлива основа: без знака наголосу, -e',
    },
    { wrong: 'Él hició la cena.', right: 'Él **hizo** la cena.', why: 'hacer → hizo (c → z)' },
    {
      wrong: 'Ellos dijieron la verdad.',
      right: 'Ellos **dijeron** la verdad.',
      why: 'після j: -eron, без i',
    },
    { wrong: 'Yo buscé las llaves.', right: 'Yo **busqué** las llaves.', why: '-car → -qué в yo' },
    {
      wrong: 'Ella pedió un café.',
      right: 'Ella **pidió** un café.',
      why: 'e → i в él / ellos у дієсловах на -ir',
    },
  ],
  selfCheck: [
    { prompt: 'Ayer (yo, ir) ___ al supermercado.', answer: 'fui' },
    { prompt: 'El año pasado (ellos, viajar) ___ a Italia.', answer: 'viajaron' },
    { prompt: 'En 2020 (nosotros, comprar) ___ un coche.', answer: 'compramos' },
    { prompt: 'Anoche (él, hacer) ___ la cena.', answer: 'hizo' },
    { prompt: 'Ayer (yo, buscar) ___ su número en internet.', answer: 'busqué' },
    { prompt: 'Ayer ellos no (decir) ___ nada.', answer: 'dijeron' },
    { prompt: 'Anoche el niño (dormir) ___ diez horas.', answer: 'durmió' },
    { prompt: '¿(Tú, tener) ___ un accidente con la moto el lunes pasado?', answer: 'tuviste' },
    { prompt: 'El mes pasado ella (leer) ___ el libro en dos días.', answer: 'leyó' },
  ],
};
