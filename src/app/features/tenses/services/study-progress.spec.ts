import { TestBed } from '@angular/core/testing';
import { PROGRESS_STORAGE_KEY, StudyProgress } from './study-progress';

function create(stored?: string): StudyProgress {
  localStorage.clear();
  if (stored !== undefined) {
    localStorage.setItem(PROGRESS_STORAGE_KEY, stored);
  }
  TestBed.resetTestingModule();
  return TestBed.inject(StudyProgress);
}

const saved = () => JSON.parse(localStorage.getItem(PROGRESS_STORAGE_KEY) ?? 'null');

describe('StudyProgress', () => {
  afterEach(() => vi.restoreAllMocks());

  it('starts empty with every tense in catalogue order', () => {
    const progress = create();
    expect(progress.pinnedTenses()).toEqual([]);
    expect(progress.otherTenses().map((t) => t.id)[0]).toBe('presente');
    expect(progress.otherTenses().length).toBe(14);
  });

  it('keeps pins oldest first and removes them from the other list', () => {
    const progress = create();
    progress.togglePinned('condicional-simple');
    progress.togglePinned('presente');
    expect(progress.pinnedTenses().map((t) => t.id)).toEqual(['condicional-simple', 'presente']);
    expect(progress.otherTenses().some((t) => t.id === 'presente')).toBe(false);
    expect(progress.otherTenses().length).toBe(12);
  });

  it('returns an unpinned tense to its catalogue position', () => {
    const progress = create();
    progress.togglePinned('estar-gerundio');
    progress.togglePinned('estar-gerundio');
    expect(progress.pinnedTenses()).toEqual([]);
    expect(progress.otherTenses()[1].id).toBe('estar-gerundio');
  });

  it('keeps learned independent from pinned', () => {
    const progress = create();
    progress.togglePinned('presente');
    progress.toggleLearned('presente');
    expect(progress.isPinned('presente')).toBe(true);
    expect(progress.isLearned('presente')).toBe(true);
    progress.toggleLearned('presente');
    expect(progress.isLearned('presente')).toBe(false);
    expect(progress.isPinned('presente')).toBe(true);
  });

  it('persists changes', () => {
    const progress = create();
    progress.togglePinned('imperativo');
    progress.toggleLearned('presente');
    TestBed.tick();
    expect(saved()).toEqual({ pinned: ['imperativo'], learned: ['presente'] });
  });

  it('restores saved state and drops unknown ids and duplicates', () => {
    const progress = create(
      JSON.stringify({
        pinned: ['presente', 'bogus', 'presente', 'imperativo'],
        learned: ['x', 'presente'],
      }),
    );
    expect(progress.pinned()).toEqual(['presente', 'imperativo']);
    expect([...progress.learned()]).toEqual(['presente']);
  });

  it('falls back to empty state for corrupt or wrong-shaped data', () => {
    expect(create('garbage').pinned()).toEqual([]);
    expect(create('[1,2]').pinned()).toEqual([]);
    expect(create('{"pinned":"presente"}').pinned()).toEqual([]);
  });

  it('picks up changes made in another tab instead of overwriting them', () => {
    const progress = create(JSON.stringify({ pinned: ['imperativo'], learned: [] }));
    const fromOtherTab = JSON.stringify({ pinned: ['imperativo'], learned: ['presente'] });
    localStorage.setItem(PROGRESS_STORAGE_KEY, fromOtherTab);
    window.dispatchEvent(
      new StorageEvent('storage', { key: PROGRESS_STORAGE_KEY, newValue: fromOtherTab }),
    );
    expect(progress.isLearned('presente')).toBe(true);

    // The next change in this tab keeps the other tab's work.
    progress.togglePinned('presente');
    TestBed.tick();
    expect(saved()).toEqual({ pinned: ['imperativo', 'presente'], learned: ['presente'] });
  });

  it('ignores storage events for other keys', () => {
    const progress = create(JSON.stringify({ pinned: ['imperativo'], learned: [] }));
    window.dispatchEvent(new StorageEvent('storage', { key: 'other', newValue: '{}' }));
    expect(progress.pinned()).toEqual(['imperativo']);
  });

  it('works in memory when storage is unavailable', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    TestBed.resetTestingModule();
    const progress = TestBed.inject(StudyProgress);
    progress.togglePinned('presente');
    TestBed.tick();
    expect(progress.isPinned('presente')).toBe(true);
  });
});
