import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { Component } from '@angular/core';
import { SidebarState } from '../../services/sidebar-state';
import { TensesLayout } from './tenses-layout';

@Component({ template: '' })
class Blank {}

function mockViewport(narrow: boolean): void {
  vi.stubGlobal('matchMedia', (query: string) => ({
    matches: narrow,
    media: query,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
  }));
}

async function render(narrow: boolean) {
  mockViewport(narrow);
  localStorage.clear();
  TestBed.configureTestingModule({
    providers: [provideRouter([{ path: '**', component: Blank }])],
  });
  const fixture = TestBed.createComponent(TensesLayout);
  await fixture.whenStable();
  const host = fixture.nativeElement as HTMLElement;
  return {
    fixture,
    host,
    toggle: host.querySelector<HTMLButtonElement>('.menu-toggle')!,
    panel: host.querySelector<HTMLElement>('#sidebar')!,
  };
}

describe('TensesLayout', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('has an accessible toggle that collapses the sidebar on wide screens', async () => {
    const { fixture, toggle, panel } = await render(false);
    expect(toggle.getAttribute('aria-controls')).toBe('sidebar');
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(toggle.getAttribute('aria-label')).toBe('Сховати меню');
    expect(panel.classList).toContain('is-visible');

    toggle.click();
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(toggle.getAttribute('aria-label')).toBe('Показати меню');
    expect(panel.classList).not.toContain('is-visible');
  });

  it('opens the drawer on narrow screens and closes it with Escape', async () => {
    const { fixture, host, toggle, panel } = await render(true);
    expect(panel.classList).not.toContain('is-visible');

    toggle.click();
    await fixture.whenStable();
    expect(panel.classList).toContain('is-visible');
    expect(host.querySelector('.backdrop')).not.toBeNull();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await fixture.whenStable();
    expect(panel.classList).not.toContain('is-visible');
  });

  it('closes the drawer after navigation', async () => {
    const { fixture, toggle } = await render(true);
    toggle.click();
    await fixture.whenStable();
    await TestBed.inject(Router).navigateByUrl('/presente');
    await fixture.whenStable();
    expect(TestBed.inject(SidebarState).drawerOpen()).toBe(false);
  });
});
