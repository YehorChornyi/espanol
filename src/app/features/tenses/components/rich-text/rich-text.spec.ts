import { TestBed } from '@angular/core/testing';
import { RichTextView } from './rich-text';

describe('RichTextView', () => {
  it('renders strong and em segments as elements', async () => {
    const fixture = TestBed.createComponent(RichTextView);
    fixture.componentRef.setInput('text', '*Ayer* habl**é** mucho');
    await fixture.whenStable();
    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector('em')?.textContent).toBe('Ayer');
    expect(host.querySelector('strong')?.textContent).toBe('é');
    expect(host.textContent).toBe('Ayer hablé mucho');
  });

  it('does not interpret HTML', async () => {
    const fixture = TestBed.createComponent(RichTextView);
    fixture.componentRef.setInput('text', '<b>x</b>');
    await fixture.whenStable();
    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector('b')).toBeNull();
    expect(host.textContent).toContain('<b>x</b>');
  });
});
