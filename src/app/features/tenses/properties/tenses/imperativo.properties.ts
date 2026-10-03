import { SectionKind } from '../../enums/section-kind.enum';
import { Tense } from '../../interfaces/tense.interface';

export const TENSE: Tense = {
  id: 'imperativo',
  intro:
    'Наказовий спосіб: накази, прохання, поради, інструкції. *¡Habla más despacio!* — «Говори повільніше!». Ствердна і заперечна форми утворюються по-різному.',
  formula: '**ствердний**: habla / hablad; **заперечний**: no + presente de subjuntivo (no hables)',
  sections: [
    {
      kind: SectionKind.Usage,
      title: 'Коли вживати',
      blocks: [
        {
          type: 'list',
          items: [
            'Накази та заборони: *¡Cierra la puerta!* *¡No toques eso!*',
            'Прохання (з *por favor* звучить м’якше): *Pásame la sal, por favor.*',
            'Поради: *Descansa un poco.* *No trabajes tanto.*',
            'Інструкції та рецепти: *Gire a la derecha.* *Corte la cebolla.*',
            'Запрошення: *Pasa, pasa.* *¡Vamos a la playa!*',
          ],
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Форми **yo** немає. Для «давай(те) зробимо» — форма **nosotros**: *¡Hablemos!* — «Поговорімо!».',
        },
      ],
    },
    {
      kind: SectionKind.Endings,
      title: 'Закінчення',
      blocks: [
        {
          type: 'paragraph',
          text: 'Ствердний: **tú** = форма él у presente (habla), **vosotros** = інфінітив, у якому -r → -d (hablad). Решта осіб — з presente de subjuntivo.',
        },
        {
          type: 'table',
          caption: 'Ствердний (afirmativo)',
          persons: true,
          headers: ['', '-ar', '-er', '-ir'],
          rows: [
            ['tú', '**-a**', '**-e**', '**-e**'],
            ['usted', '**-e**', '**-a**', '**-a**'],
            ['nosotros', '**-emos**', '**-amos**', '**-amos**'],
            ['vosotros', '**-ad**', '**-ed**', '**-id**'],
            ['ustedes', '**-en**', '**-an**', '**-an**'],
          ],
        },
        {
          type: 'paragraph',
          text: 'Заперечний: **no** + presente de subjuntivo для всіх осіб. Голосна «міняється»: -ar → e, -er / -ir → a.',
        },
        {
          type: 'table',
          caption: 'Заперечний (negativo)',
          persons: true,
          headers: ['', '-ar', '-er', '-ir'],
          rows: [
            ['tú', 'no **-es**', 'no **-as**', 'no **-as**'],
            ['usted', 'no **-e**', 'no **-a**', 'no **-a**'],
            ['nosotros', 'no **-emos**', 'no **-amos**', 'no **-amos**'],
            ['vosotros', 'no **-éis**', 'no **-áis**', 'no **-áis**'],
            ['ustedes', 'no **-en**', 'no **-an**', 'no **-an**'],
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
          caption: 'Ствердний',
          persons: true,
          headers: ['', '-ar (hablar)', '-er (comer)', '-ir (vivir)'],
          rows: [
            ['tú', 'habl**a**', 'com**e**', 'viv**e**'],
            ['usted', 'habl**e**', 'com**a**', 'viv**a**'],
            ['nosotros', 'habl**emos**', 'com**amos**', 'viv**amos**'],
            ['vosotros', 'habl**ad**', 'com**ed**', 'viv**id**'],
            ['ustedes', 'habl**en**', 'com**an**', 'viv**an**'],
          ],
        },
        {
          type: 'table',
          caption: 'Заперечний',
          persons: true,
          headers: ['', '-ar (hablar)', '-er (comer)', '-ir (vivir)'],
          rows: [
            ['tú', 'no habl**es**', 'no com**as**', 'no viv**as**'],
            ['usted', 'no habl**e**', 'no com**a**', 'no viv**a**'],
            ['nosotros', 'no habl**emos**', 'no com**amos**', 'no viv**amos**'],
            ['vosotros', 'no habl**éis**', 'no com**áis**', 'no viv**áis**'],
            ['ustedes', 'no habl**en**', 'no com**an**', 'no viv**an**'],
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
          text: 'Неправильності три: вісім коротких форм **tú**, форми usted / ustedes / nosotros і всі заперечні — з presente de subjuntivo (а отже, з його неправильностями), та зміна кореня.',
        },
      ],
      groups: [
        {
          title: 'Неправильні tú',
          rule: 'Короткі форми лише у ствердному. Заперечна форма — з presente de subjuntivo: haz, але no hagas.',
          table: {
            type: 'table',
            headers: ['Дієслово', 'tú (ствердний)', 'tú (заперечний)'],
            rows: [
              ['decir', '**di**', 'no digas'],
              ['hacer', '**haz**', 'no hagas'],
              ['ir', '**ve**', 'no vayas'],
              ['poner', '**pon**', 'no pongas'],
              ['salir', '**sal**', 'no salgas'],
              ['ser', '**sé**', 'no seas'],
              ['tener', '**ten**', 'no tengas'],
              ['venir', '**ven**', 'no vengas'],
            ],
          },
        },
        {
          title: 'usted / ustedes / nosotros = presente de subjuntivo',
          rule: 'Ці особи завжди беруть форму presente de subjuntivo — часто з неправильною основою з yo: tengo → **tenga**; ir, ser, saber, dar, estar мають власні форми (vaya, sea, sepa, dé, esté). Виняток: ствердне *vamos* (від ir), але заперечне *no vayamos*.',
          table: {
            type: 'table',
            headers: ['Дієслово', 'usted', 'nosotros', 'ustedes'],
            rows: [
              ['tener', 'tenga', 'tengamos', 'tengan'],
              ['hacer', 'haga', 'hagamos', 'hagan'],
              ['ir', 'vaya', 'vamos (no vayamos)', 'vayan'],
              ['ser', 'sea', 'seamos', 'sean'],
              ['decir', 'diga', 'digamos', 'digan'],
              ['poner', 'ponga', 'pongamos', 'pongan'],
              ['venir', 'venga', 'vengamos', 'vengan'],
              ['salir', 'salga', 'salgamos', 'salgan'],
              ['dar', 'dé', 'demos', 'den'],
              ['estar', 'esté', 'estemos', 'estén'],
              ['saber', 'sepa', 'sepamos', 'sepan'],
            ],
          },
        },
        {
          title: 'Зміна кореня',
          rule: 'Корінь змінюється в tú, usted, ustedes, але **не у ствердному vosotros** (cerrad, volved, pedid; у заперечному -ir змінюється: no pidáis, no durmáis). У -ir дієсловах nosotros теж змінюється: **pidamos**, **durmamos**.',
          table: {
            type: 'table',
            headers: ['Тип', 'Дієслово', 'tú', 'usted', 'nosotros', 'vosotros'],
            rows: [
              ['e → ie', 'cerrar', 'c**ie**rra', 'c**ie**rre', 'cerremos', 'cerrad'],
              ['o → ue', 'volver', 'v**ue**lve', 'v**ue**lva', 'volvamos', 'volved'],
              ['e → i', 'pedir', 'p**i**de', 'p**i**da', 'p**i**damos', 'pedid'],
              ['o → ue / u', 'dormir', 'd**ue**rme', 'd**ue**rma', 'd**u**rmamos', 'dormid'],
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
            ['por favor', 'будь ласка'],
            ['¡venga!', 'давай!'],
            ['ahora mismo', 'негайно, просто зараз'],
            ['¡ojo!', 'обережно! увага!'],
            ['nunca / jamás + subjuntivo (без no)', 'ніколи не… (*nunca digas*)'],
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
            { es: '**Habla** más despacio, por favor.', uk: 'Говори повільніше, будь ласка.' },
            { es: '**Ten** cuidado.', uk: 'Будь обережний.' },
            {
              es: '**Haz** los deberes y **pon** la mesa.',
              uk: 'Зроби домашнє завдання і накрий на стіл.',
            },
            { es: 'No **tengas** miedo.', uk: 'Не бійся.' },
            { es: '**Dímelo**. / No me lo **digas**.', uk: 'Скажи мені це. / Не кажи мені цього.' },
            { es: '**Siéntese**, por favor.', uk: 'Сідайте, будь ласка.' },
            { es: '**Levantaos**, que es tarde.', uk: 'Вставайте, бо вже пізно.' },
            { es: '**Vamos** a la playa.', uk: 'Ходімо на пляж.' },
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
          text: 'У ствердному займенники **приєднуються в кінці**: *dímelo*, *siéntate*, *hazlo*. У заперечному — стоять **перед дієсловом** окремо: *no me lo digas*, *no te sientes*.',
        },
        {
          type: 'note',
          tone: 'warning',
          text: 'Коли приєднуєш займенники, наголос не зміщується, тому часто з’являється знак наголосу: di + me + lo → **dímelo**, sienta + te → **siéntate**, diga + me → **dígame**.',
        },
        {
          type: 'note',
          tone: 'tip',
          text: 'Vosotros ствердний: інфінітив, у якому **-r → -d**: hablar → *hablad*, comer → *comed*, vivir → *vivid*.',
        },
        {
          type: 'note',
          tone: 'warning',
          text: 'Перед *-os* vosotros втрачає **-d**: levantad + os → *levantaos*, sentad + os → *sentaos*. Виняток — irse: *idos*. Nosotros так само втрачає **-s** перед *-nos*: *sentémonos*.',
        },
      ],
    },
  ],
  mistakes: [
    {
      wrong: 'No habla tan alto.',
      right: 'No **hables** tan alto.',
      why: 'заперечний — presente de subjuntivo',
    },
    { wrong: 'Hace los deberes. (tú)', right: '**Haz** los deberes.', why: 'hacer → haz у tú' },
    { wrong: 'Tiene paciencia. (tú)', right: '**Ten** paciencia.', why: 'tener → ten у tú' },
    {
      wrong: 'No dímelo.',
      right: 'No **me lo digas**.',
      why: 'у заперечному займенники стоять перед дієсловом',
    },
    {
      wrong: 'Dime lo.',
      right: '**Dímelo**.',
      why: 'займенники пишуться разом, зі знаком наголосу',
    },
    { wrong: 'Sentados. (vosotros)', right: '**Sentaos**.', why: 'перед -os випадає -d' },
    { wrong: 'No vas solo.', right: 'No **vayas** solo.', why: 'ir → no vayas' },
  ],
  selfCheck: [
    { prompt: '(Tú, tener) ___ cuidado.', answer: 'ten' },
    { prompt: '(Tú, hacer) ___ los deberes ahora.', answer: 'haz' },
    { prompt: '(Tú, poner) ___ la mesa, por favor.', answer: 'pon' },
    { prompt: 'No (tú, tener) ___ miedo.', answer: 'tengas' },
    { prompt: 'No (tú, tocar) ___ eso.', answer: 'toques' },
    { prompt: '(Usted, pasar) ___, por favor.', answer: 'pase' },
    { prompt: '(Vosotros, sentarse) ___ aquí.', answer: 'sentaos' },
    { prompt: '(Tú, decir + me + lo) ___, por favor.', answer: 'dímelo' },
    { prompt: 'No (tú, ir) ___ solo.', answer: 'vayas' },
  ],
};
