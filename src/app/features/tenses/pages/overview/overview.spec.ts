import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import Overview from './overview';

describe('Overview', () => {
  it('shows the decision guide and a 14-row tense map linking to each tense', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(Overview);
    await fixture.whenStable();
    const host = fixture.nativeElement as HTMLElement;

    expect(host.querySelectorAll('.guide-step').length).toBeGreaterThanOrEqual(6);
    const rows = host.querySelectorAll('tbody tr');
    expect(rows.length).toBe(14);
    expect(rows[0].querySelector('a')?.getAttribute('href')).toBe('/presente');
    expect(rows[13].querySelector('a')?.getAttribute('href')).toBe('/imperfecto-subjuntivo');
  });
});
