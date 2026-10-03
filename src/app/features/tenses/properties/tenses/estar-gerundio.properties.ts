import { SectionKind } from '../../enums/section-kind.enum';
import { Tense } from '../../interfaces/tense.interface';

export const TENSE: Tense = {
  id: 'estar-gerundio',
  intro:
    'Дія відбувається **просто зараз** або в цей період. Твій «present continuous»: *Estoy aprendiendo español* — «Я (зараз) вчу іспанську».',
  formula: '**estar (у presente) + герундій** (estoy + hablando)',
  sections: [
    {
      kind: SectionKind.Usage,
      title: 'Коли вживати',
      blocks: [
        {
          type: 'list',
          items: [
            'Дія відбувається просто зараз, у момент мовлення: *¿Qué estás haciendo?*',
            'Дія триває в поточний період, хоч і не саме цієї секунди: *Estoy aprendiendo español.*',
            'Підкреслення процесу, а не факту: *Está lloviendo mucho.*',
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Аналог в англійській — **Present Continuous**, але іспанці вживають його рідше: *¿Qué haces?* теж нормально означає «Що робиш зараз?».',
        },
      ],
    },
    {
      kind: SectionKind.Conjugation,
      title: 'Утворення',
      blocks: [
        {
          type: 'paragraph',
          text: 'Герундій не змінюється за особами — змінюється лише **estar**.',
        },
        {
          type: 'table',
          caption: 'Закінчення герундія',
          headers: ['Дієслово', 'Закінчення', 'Приклад'],
          rows: [
            ['-ar', '**-ando**', 'hablar → habl**ando**'],
            ['-er', '**-iendo**', 'comer → com**iendo**'],
            ['-ir', '**-iendo**', 'vivir → viv**iendo**'],
            ['голосна + -er/-ir', '**-yendo**', 'leer → le**yendo**'],
          ],
        },
        {
          type: 'table',
          caption: 'Відмінювання estar',
          persons: true,
          headers: ['', 'estar', '+ gerundio'],
          rows: [
            ['yo', 'est**oy**', 'hablando'],
            ['tú', 'est**ás**', 'comiendo'],
            ['él / ella / usted', 'est**á**', 'leyendo'],
            ['nosotros', 'est**amos**', 'trabajando'],
            ['vosotros', 'est**áis**', 'durmiendo'],
            ['ellos / ustedes', 'est**án**', 'escribiendo'],
          ],
        },
      ],
    },
    {
      kind: SectionKind.Irregular,
      title: 'Ходові неправильні герундії',
      blocks: [
        {
          type: 'paragraph',
          text: 'Неправильний лише герундій; estar завжди відмінюється однаково.',
        },
      ],
      groups: [
        {
          title: 'Зміна кореня e → i, o → u',
          rule: 'Дієслова на -ir, що змінюють корінь у presente (e → ie, e → i, o → ue), у герундії мають e → i, o → u (як в indefinido: pidió, durmió): pedir → p**i**diendo, dormir → d**u**rmiendo.',
          table: {
            type: 'table',
            headers: ['Дієслово', 'Герундій', 'Дієслово', 'Герундій'],
            rows: [
              ['dormir', '**durmiendo**', 'pedir', '**pidiendo**'],
              ['morir', '**muriendo**', 'decir', '**diciendo**'],
              ['venir', '**viniendo**', 'seguir', '**siguiendo**'],
              ['sentir', '**sintiendo**', 'repetir', '**repitiendo**'],
              ['servir', '**sirviendo**', 'vestir', '**vistiendo**'],
            ],
          },
        },
        {
          title: 'Закінчення -yendo',
          rule: 'Якщо основа закінчується на голосну, -iendo стає **-yendo**: leer → le**yendo**.',
          table: {
            type: 'table',
            headers: ['Дієслово', 'Герундій', 'Дієслово', 'Герундій'],
            rows: [
              ['leer', '**leyendo**', 'oír', '**oyendo**'],
              ['traer', '**trayendo**', 'caer', '**cayendo**'],
              ['creer', '**creyendo**', 'construir', '**construyendo**'],
            ],
          },
        },
        {
          title: 'Особливі випадки',
          rule: 'Ці форми треба просто запам’ятати.',
          table: {
            type: 'table',
            headers: ['Дієслово', 'Герундій'],
            rows: [
              ['ir', '**yendo**'],
              ['poder', '**pudiendo**'],
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
            ['ahora', 'зараз'],
            ['ahora mismo', 'просто зараз'],
            ['en este momento', 'у цей момент'],
            ['estos días', 'цими днями'],
            ['todavía', 'досі, ще'],
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
            { es: '**Estoy aprendiendo** español.', uk: 'Я (зараз) вчу іспанську.' },
            { es: '¿Qué **estás haciendo**?', uk: 'Що робиш?' },
            { es: '¡Silencio! El bebé **está durmiendo**.', uk: 'Тихо! Дитина спить.' },
            {
              es: 'Ahora mismo **estamos leyendo** el contrato.',
              uk: 'Просто зараз ми читаємо договір.',
            },
            { es: '**Está lloviendo** otra vez.', uk: 'Знову йде дощ.' },
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
          text: 'В іспанській це вживають рідше, ніж в англійській: *¿Qué haces?* теж нормально означає «Що робиш зараз?».',
        },
        {
          type: 'note',
          tone: 'warning',
          text: 'Для майбутнього (*I’m meeting him tomorrow*) estar + gerundio **не** вживається — там presente або ir a: *Mañana viajo* / *Mañana voy a viajar*.',
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Займенник ставиться перед estar або приєднується до герундія (тоді пишеться знак наголосу): *Lo estoy haciendo* = *Estoy haciéndolo*.',
        },
      ],
    },
  ],
  mistakes: [
    { wrong: 'Estoy trabajar.', right: 'Estoy **trabajando**.', why: 'після estar — герундій' },
    {
      wrong: 'Mañana estoy viajando a Madrid.',
      right: 'Mañana **viajo** / **voy a viajar** a Madrid.',
      why: 'estar + gerundio не для майбутнього',
    },
    { wrong: 'Estoy dormiendo.', right: 'Estoy **durmiendo**.', why: 'dormir: o → u в герундії' },
    { wrong: 'Está leiendo.', right: 'Está **leyendo**.', why: 'голосна + -er → -yendo' },
    { wrong: 'Estamos pediendo.', right: 'Estamos **pidiendo**.', why: 'pedir: e → i в герундії' },
  ],
  selfCheck: [
    { prompt: '¡Silencio! El bebé (dormir) ___ .', answer: 'está durmiendo' },
    { prompt: '¿Qué (tú, hacer) ___ ahora mismo?', answer: 'estás haciendo' },
    { prompt: 'Ahora (yo, leer) ___ un libro muy bueno.', answer: 'estoy leyendo' },
    { prompt: 'En este momento (nosotros, trabajar) ___ .', answer: 'estamos trabajando' },
    { prompt: '¿Qué (vosotros, decir) ___ ahora mismo?', answer: 'estáis diciendo' },
    { prompt: 'Mira, los niños (pedir) ___ helado.', answer: 'están pidiendo' },
    { prompt: 'Mira, (llover) ___ .', answer: 'está lloviendo' },
  ],
};
