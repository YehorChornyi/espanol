import { DecisionStep } from '../interfaces/decision-step.interface';

/** «Як вибрати час за 5 секунд»: go top to bottom and stop at the first «так». */
export const DECISION_GUIDE: readonly DecisionStep[] = [
  {
    question: 'Відбувається просто зараз?',
    tenseId: 'estar-gerundio',
    example: '*Estoy comiendo.*',
  },
  {
    question: 'Зазвичай, завжди, факт?',
    tenseId: 'presente',
    example: '*Como a las dos.*',
  },
  {
    question: 'План, «збираюся»?',
    tenseId: 'ir-a-infinitivo',
    example: '*Voy a comer.*',
  },
  {
    question: 'Буде вже зроблено до певного моменту в майбутньому?',
    tenseId: 'futuro-perfecto',
    example: '*Para las ocho ya habré cenado.*',
  },
  {
    question: 'Майбутнє, прогноз, обіцянка?',
    tenseId: 'futuro-simple',
    example: '*Mañana lloverá.*',
  },
  {
    question: 'Минуле, але період ще триває (hoy, esta semana) або досвід «у житті»?',
    tenseId: 'preterito-perfecto',
    example: '*Hoy he comido.*',
  },
  {
    question: 'Минуле, період закритий (ayer, el año pasado)?',
    tenseId: 'preterito-indefinido',
    example: '*Ayer comí.*',
  },
  {
    question: 'Минула звичка, опис чи тло подій («бувало», «колись»)?',
    tenseId: 'preterito-imperfecto',
    example: '*De niño comía mucho.*',
  },
  {
    question: 'Сталося ще раніше за іншу минулу дію?',
    tenseId: 'preterito-pluscuamperfecto',
    example: '*Cuando llegué, ya habían comido.*',
  },
  {
    question: '«Зробив би» в минулому — але вже не вийшло?',
    tenseId: 'condicional-compuesto',
    example: '*Yo que tú, habría aceptado.*',
  },
  {
    question: '«Би», ввічливе прохання, порада?',
    tenseId: 'condicional-simple',
    example: '*Comería algo.*',
  },
  {
    question: 'Наказ чи прохання до когось?',
    tenseId: 'imperativo',
    example: '*¡Come!*',
  },
  {
    question: 'Після «quiero que», «ojalá», «es importante que» (бажання, емоція, сумнів)?',
    tenseId: 'presente-subjuntivo',
    example: '*Quiero que comas.*',
  },
  {
    question: '«Якби…» (нереальна умова) або бажання в минулому?',
    tenseId: 'imperfecto-subjuntivo',
    example: '*Si comiera menos…*',
  },
];
