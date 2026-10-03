import { SectionKind } from '../../enums/section-kind.enum';
import { Tense } from '../../interfaces/tense.interface';

export const TENSE: Tense = {
  id: 'presente',
  intro:
    'Звички, факти, загальне «взагалі». Також може означати найближче майбутнє з маркером: *Mañana trabajo* — «Завтра працюю».',
  formula: '**основа + закінчення** (habl- + -o)',
  sections: [
    {
      kind: SectionKind.Usage,
      title: 'Коли вживати',
      blocks: [
        {
          type: 'list',
          items: [
            'Звички й регулярні дії: *Siempre desayuno a las ocho.*',
            'Факти та загальні істини: *El agua hierve a cien grados.*',
            'Стан «узагалі», а не саме зараз: *Trabajo como programador.*',
            'Найближче майбутнє з маркером часу: *Mañana trabajo.*',
            'Розповідь у «живому» теперішньому та інструкції: *Giras a la derecha y llegas.*',
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Аналог в англійській — **Present Simple**, але іспанський presente ширший: *¿Qué haces?* може означати й «Що ти зараз робиш?».',
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
          headers: ['', '-ar', '-er', '-ir'],
          rows: [
            ['yo', '**-o**', '**-o**', '**-o**'],
            ['tú', '**-as**', '**-es**', '**-es**'],
            ['él / ella / usted', '**-a**', '**-e**', '**-e**'],
            ['nosotros', '**-amos**', '**-emos**', '**-imos**'],
            ['vosotros', '**-áis**', '**-éis**', '**-ís**'],
            ['ellos / ustedes', '**-an**', '**-en**', '**-en**'],
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
            ['yo', 'habl**o**', 'com**o**', 'viv**o**'],
            ['tú', 'habl**as**', 'com**es**', 'viv**es**'],
            ['él / ella / usted', 'habl**a**', 'com**e**', 'viv**e**'],
            ['nosotros', 'habl**amos**', 'com**emos**', 'viv**imos**'],
            ['vosotros', 'habl**áis**', 'com**éis**', 'viv**ís**'],
            ['ellos / ustedes', 'habl**an**', 'com**en**', 'viv**en**'],
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
          text: 'Неправильність у presente буває трьох видів: особливі дієслова (ser, estar, ir…), неправильна лише форма **yo** та зміна кореня. Багато ходових дієслів поєднують кілька видів: tengo, але tienes.',
        },
      ],
      groups: [
        {
          title: 'Ходові неправильні (повне відмінювання)',
          rule: 'Ці форми треба просто запам’ятати.',
          table: {
            type: 'table',
            headers: ['Дієслово', 'yo', 'tú', 'él', 'nosotros', 'vosotros', 'ellos'],
            rows: [
              ['ser', 'soy', 'eres', 'es', 'somos', 'sois', 'son'],
              ['estar', 'estoy', 'estás', 'está', 'estamos', 'estáis', 'están'],
              ['ir', 'voy', 'vas', 'va', 'vamos', 'vais', 'van'],
              ['tener', 'tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen'],
              ['venir', 'vengo', 'vienes', 'viene', 'venimos', 'venís', 'vienen'],
              ['decir', 'digo', 'dices', 'dice', 'decimos', 'decís', 'dicen'],
              ['hacer', 'hago', 'haces', 'hace', 'hacemos', 'hacéis', 'hacen'],
              ['poder', 'puedo', 'puedes', 'puede', 'podemos', 'podéis', 'pueden'],
              ['querer', 'quiero', 'quieres', 'quiere', 'queremos', 'queréis', 'quieren'],
              ['saber', 'sé', 'sabes', 'sabe', 'sabemos', 'sabéis', 'saben'],
              ['dar', 'doy', 'das', 'da', 'damos', 'dais', 'dan'],
              ['ver', 'veo', 'ves', 've', 'vemos', 'veis', 'ven'],
              ['oír', 'oigo', 'oyes', 'oye', 'oímos', 'oís', 'oyen'],
            ],
          },
        },
        {
          title: 'Неправильні лише в yo',
          rule: 'Решта осіб — за звичайними закінченнями: pongo, але pones, pone…',
          table: {
            type: 'table',
            headers: ['Дієслово', 'yo', 'Дієслово', 'yo'],
            rows: [
              ['poner', '**pongo**', 'conocer', '**conozco**'],
              ['salir', '**salgo**', 'conducir', '**conduzco**'],
              ['traer', '**traigo**', 'traducir', '**traduzco**'],
              ['caer', '**caigo**', 'parecer', '**parezco**'],
              ['valer', '**valgo**', 'ofrecer', '**ofrezco**'],
            ],
          },
        },
        {
          title: 'Зміна кореня',
          rule: 'Корінь змінюється в усіх особах, **крім nosotros і vosotros**: quiero, але queremos.',
          table: {
            type: 'table',
            headers: ['Тип', 'Ходові дієслова', 'Приклад'],
            rows: [
              [
                'e → ie',
                'querer, pensar, empezar, entender, preferir, cerrar, sentir',
                'qu**ie**ro / queremos',
              ],
              [
                'o → ue',
                'poder, dormir, volver, encontrar, contar, costar, recordar',
                'p**ue**do / podemos',
              ],
              ['u → ue', 'jugar (єдине)', 'j**ue**go / jugamos'],
              ['e → i', 'pedir, repetir, servir, seguir, vestir', 'p**i**do / pedimos'],
            ],
          },
        },
        {
          title: 'Повне відмінювання зі зміною кореня',
          rule: 'Зверни увагу на «черевик»: змінені форми — yo, tú, él, ellos.',
          table: {
            type: 'table',
            persons: true,
            headers: ['', 'querer (e → ie)', 'poder (o → ue)', 'pedir (e → i)'],
            rows: [
              ['yo', 'qu**ie**ro', 'p**ue**do', 'p**i**do'],
              ['tú', 'qu**ie**res', 'p**ue**des', 'p**i**des'],
              ['él / ella / usted', 'qu**ie**re', 'p**ue**de', 'p**i**de'],
              ['nosotros', 'queremos', 'podemos', 'pedimos'],
              ['vosotros', 'queréis', 'podéis', 'pedís'],
              ['ellos / ustedes', 'qu**ie**ren', 'p**ue**den', 'p**i**den'],
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
            ['siempre', 'завжди'],
            ['normalmente / generalmente', 'зазвичай'],
            ['cada día / todos los días', 'щодня'],
            ['a menudo', 'часто'],
            ['a veces', 'іноді'],
            ['nunca', 'ніколи'],
            ['los lunes', 'щопонеділка'],
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
            { es: '**Trabajo** como programador.', uk: 'Я працюю програмістом.' },
            { es: 'Siempre **desayuno** a las ocho.', uk: 'Я завжди снідаю о восьмій.' },
            { es: '¿Dónde **vives**?', uk: 'Де ти живеш?' },
            { es: 'Mañana **trabajo** desde casa.', uk: 'Завтра я працюю з дому.' },
            { es: 'No **puedo** dormir.', uk: 'Я не можу заснути.' },
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
          text: 'Наголос змінює значення: **hablo** (я говорю) ≠ **habló** (він говорив, indefinido).',
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Займенники yo, tú… зазвичай опускають — особу видно із закінчення: *Hablo español.*',
        },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Yo sabo.', right: 'Yo **sé**.', why: 'saber неправильне в yo' },
    {
      wrong: 'Yo conoco a Ana.',
      right: 'Yo **conozco** a Ana.',
      why: 'голосна + -cer / -cir → -zco в yo (крім hacer, decir)',
    },
    { wrong: 'Quieremos ir.', right: '**Queremos** ir.', why: 'у nosotros корінь не змінюється' },
    { wrong: 'Yo jugo al fútbol.', right: 'Yo **juego** al fútbol.', why: 'jugar: u → ue' },
    { wrong: 'Yo hace la cena.', right: 'Yo **hago** la cena.', why: 'hacer → hago в yo' },
  ],
  selfCheck: [
    { prompt: 'Normalmente (ella, trabajar) ___ desde casa.', answer: 'trabaja' },
    { prompt: '(Yo, tener) ___ dos hermanos.', answer: 'tengo' },
    { prompt: '¿(Tú, poder) ___ ayudarme?', answer: 'puedes' },
    { prompt: 'Nosotros (vivir) ___ en Valencia.', answer: 'vivimos' },
    { prompt: '(Yo, conocer) ___ a tu hermano.', answer: 'conozco' },
    { prompt: 'Los sábados los niños (jugar) ___ en el parque.', answer: 'juegan' },
    { prompt: '¿Qué (vosotros, querer) ___ comer?', answer: 'queréis' },
  ],
};
