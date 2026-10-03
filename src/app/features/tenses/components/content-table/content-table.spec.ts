import { TestBed } from '@angular/core/testing';
import { TableBlock } from '../../types/content-block.types';
import { ContentTable } from './content-table';

const BLOCK: TableBlock = {
  type: 'table',
  caption: 'Закінчення',
  persons: true,
  headers: ['', '-ar'],
  rows: [
    ['yo', 'habl**o**'],
    ['tú', 'habl**as**'],
  ],
};

describe('ContentTable', () => {
  it('renders an accessible scroll region with column and row headers', async () => {
    const fixture = TestBed.createComponent(ContentTable);
    fixture.componentRef.setInput('block', BLOCK);
    await fixture.whenStable();
    const host = fixture.nativeElement as HTMLElement;

    const region = host.querySelector('[role="region"]');
    expect(region?.getAttribute('aria-label')).toBe('Закінчення');
    expect(region?.getAttribute('tabindex')).toBe('0');
    expect(host.querySelector('caption')?.textContent?.trim()).toBe('Закінчення');
    expect(host.querySelectorAll('th[scope="col"]').length).toBe(2);
    expect(host.querySelectorAll('th[scope="row"]').length).toBe(2);
    expect(host.querySelector('td strong')?.textContent).toBe('o');
  });

  it('uses the fallback label without a caption and plain cells without persons', async () => {
    const fixture = TestBed.createComponent(ContentTable);
    fixture.componentRef.setInput('block', { ...BLOCK, caption: undefined, persons: false });
    fixture.componentRef.setInput('label', 'Відмінювання');
    await fixture.whenStable();
    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector('[role="region"]')?.getAttribute('aria-label')).toBe('Відмінювання');
    expect(host.querySelectorAll('th[scope="row"]').length).toBe(0);
  });
});
