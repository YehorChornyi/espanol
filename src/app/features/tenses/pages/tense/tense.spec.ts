import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TenseContent } from '../../services/tense-content';
import TensePage from './tense';

async function render(tenseId = 'preterito-indefinido') {
  const fixture = TestBed.createComponent(TensePage);
  fixture.componentRef.setInput('tenseId', tenseId);
  await fixture.whenStable();
  return { fixture, host: fixture.nativeElement as HTMLElement };
}

describe('TensePage', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
  });

  it('renders the tense header, formula and sections', async () => {
    const { host } = await render();
    expect(host.querySelector('h1')?.textContent?.trim()).toBe('Pretérito indefinido');
    expect(host.querySelector('.formula')).not.toBeNull();
    const headings = [...host.querySelectorAll('h2')].map((h) => h.textContent?.trim());
    expect(headings.length).toBeGreaterThanOrEqual(7);
    expect(headings).toContain('Типові помилки');
    expect(headings).toContain('Самоперевірка');
  });

  it('renders every irregular group with a heading and a table', async () => {
    const { host } = await render();
    const groups = host.querySelectorAll('app-irregular-group');
    expect(groups.length).toBeGreaterThanOrEqual(7);
    for (const group of groups) {
      expect(group.querySelector('h3')).not.toBeNull();
      expect(group.querySelector('table')).not.toBeNull();
    }
  });

  it('links every section from the chips and pages to the neighbouring tenses', async () => {
    const { host } = await render('estar-gerundio');
    const chips = [...host.querySelectorAll<HTMLAnchorElement>('.toc-link')];
    const sectionIds = [...host.querySelectorAll('section')].map((s) => s.id);
    expect(chips.map((a) => a.getAttribute('href')?.split('#')[1])).toEqual(sectionIds);
    const pager = [...host.querySelectorAll<HTMLAnchorElement>('.pager-link')];
    expect(pager.map((a) => a.getAttribute('href'))).toEqual(['/presente', '/ir-a-infinitivo']);
  });

  it('toggles pinned and learned from the header', async () => {
    const { fixture, host } = await render('presente');
    const [pin, learned] = host.querySelectorAll<HTMLButtonElement>('.actions button');
    expect(pin.getAttribute('aria-pressed')).toBe('false');
    pin.click();
    learned.click();
    await fixture.whenStable();
    expect(pin.getAttribute('aria-pressed')).toBe('true');
    expect(learned.getAttribute('aria-pressed')).toBe('true');
  });

  it('shows an error with a retry button when loading fails', async () => {
    const content = TestBed.inject(TenseContent);
    vi.spyOn(content, 'load').mockRejectedValue(new Error('offline'));
    const { host } = await render();
    expect(host.querySelector('[role="alert"]')?.textContent).toContain('Не вдалося завантажити');
    expect(host.querySelector('[role="alert"] button')?.textContent).toContain('Спробувати ще раз');
  });
});
