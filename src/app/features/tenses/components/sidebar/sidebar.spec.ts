import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { Component } from '@angular/core';
import { StudyProgress } from '../../services/study-progress';
import { Sidebar } from './sidebar';

@Component({ template: '' })
class Blank {}

describe('Sidebar', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({
      providers: [
        provideRouter([
          { path: '', component: Blank },
          { path: ':tenseId', component: Blank },
        ]),
      ],
    });
  });

  async function render() {
    const fixture = TestBed.createComponent(Sidebar);
    await fixture.whenStable();
    return { fixture, host: fixture.nativeElement as HTMLElement };
  }

  const links = (host: HTMLElement) =>
    [...host.querySelectorAll<HTMLAnchorElement>('.row-link')].map((a) => a.getAttribute('href'));

  it('lists the overview and all 14 tenses with name and hint', async () => {
    const { host } = await render();
    expect(host.querySelector('.overview-link')?.getAttribute('href')).toBe('/');
    expect(links(host).length).toBe(14);
    expect(host.querySelector('.row-name')?.textContent).toContain('Presente');
    expect(host.querySelector('.row-hint')?.textContent).toContain('зазвичай');
  });

  it('hides the pinned group when nothing is pinned', async () => {
    const { host } = await render();
    expect(host.textContent).not.toContain('Вивчаю зараз');
    expect(host.textContent).toContain('Усі часи');
  });

  it('moves pinned tenses to the top group in pin order', async () => {
    const { fixture, host } = await render();
    const pinButton = (name: string) =>
      host.querySelector<HTMLButtonElement>(`button[aria-label="Закріпити «${name}»"]`)!;
    pinButton('Condicional simple').click();
    await fixture.whenStable();
    pinButton('Presente').click();
    await fixture.whenStable();

    const groups = host.querySelectorAll('.group');
    expect(groups[0].querySelector('.group-title')?.textContent).toContain('Вивчаю зараз');
    expect([...groups[0].querySelectorAll('.row-link')].map((a) => a.getAttribute('href'))).toEqual(
      ['/condicional-simple', '/presente'],
    );
    expect(groups[1].querySelectorAll('.row-link').length).toBe(12);
    const unpin = host.querySelector('button[aria-label="Відкріпити «Presente»"]');
    expect(unpin?.getAttribute('aria-pressed')).toBe('true');
  });

  it('hides the «all» group when every tense is pinned', async () => {
    const progress = TestBed.inject(StudyProgress);
    for (const tense of progress.otherTenses()) {
      progress.togglePinned(tense.id);
    }
    const { host } = await render();
    expect(host.textContent).not.toContain('Усі часи');
  });

  it('shows the learned mark with hidden text', async () => {
    TestBed.inject(StudyProgress).toggleLearned('presente');
    const { host } = await render();
    expect(host.querySelector('.learned-mark')).not.toBeNull();
    expect(host.querySelector('.visually-hidden')?.textContent).toContain('вивчено');
  });

  it('marks the active tense with aria-current', async () => {
    const harness = await RouterTestingHarness.create('/imperativo');
    const { host } = await render();
    await harness.fixture.whenStable();
    const active = host.querySelector('[aria-current="page"]');
    expect(active?.getAttribute('href')).toBe('/imperativo');
  });
});
