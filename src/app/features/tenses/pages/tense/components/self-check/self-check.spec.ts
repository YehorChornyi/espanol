import { TestBed } from '@angular/core/testing';
import { SelfCheck } from './self-check';

const ITEMS = [
  { prompt: 'Ayer (yo, ir) ___ al cine.', answer: 'fui' },
  { prompt: 'Hoy (nosotros, comer) ___ en casa.', answer: 'hemos comido' },
];

describe('SelfCheck', () => {
  async function render() {
    const fixture = TestBed.createComponent(SelfCheck);
    fixture.componentRef.setInput('items', ITEMS);
    await fixture.whenStable();
    return { fixture, host: fixture.nativeElement as HTMLElement };
  }

  const answers = (host: HTMLElement) =>
    [...host.querySelectorAll<HTMLElement>('.answer')].map((answer) => answer.hidden);

  it('hides all answers initially', async () => {
    const { host } = await render();
    expect(answers(host)).toEqual([true, true]);
  });

  it('reveals only the chosen answer', async () => {
    const { fixture, host } = await render();
    const button = host.querySelectorAll<HTMLButtonElement>('.reveal')[0];
    button.click();
    await fixture.whenStable();
    expect(answers(host)).toEqual([false, true]);
    expect(button.getAttribute('aria-expanded')).toBe('true');
  });

  it('reveals all answers at once', async () => {
    const { fixture, host } = await render();
    host.querySelector<HTMLButtonElement>('.reveal-all')!.click();
    await fixture.whenStable();
    expect(answers(host)).toEqual([false, false]);
  });
});
