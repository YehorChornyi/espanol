import { TestBed } from '@angular/core/testing';
import { SIDEBAR_STORAGE_KEY, SidebarState } from './sidebar-state';

function mockViewport(narrow: boolean): void {
  vi.stubGlobal('matchMedia', (query: string) => ({
    matches: narrow,
    media: query,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
  }));
}

function create(stored?: string): SidebarState {
  if (stored !== undefined) {
    localStorage.setItem(SIDEBAR_STORAGE_KEY, stored);
  }
  TestBed.resetTestingModule();
  return TestBed.inject(SidebarState);
}

describe('SidebarState', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => vi.unstubAllGlobals());

  describe('on wide screens', () => {
    beforeEach(() => mockViewport(false));

    it('is expanded by default', () => {
      const state = create();
      expect(state.visible()).toBe(true);
    });

    it('toggles collapsed and persists it', () => {
      const state = create();
      state.toggle();
      TestBed.tick();
      expect(state.visible()).toBe(false);
      expect(JSON.parse(localStorage.getItem(SIDEBAR_STORAGE_KEY)!)).toEqual({ collapsed: true });
    });

    it('restores the collapsed state', () => {
      expect(create('{"collapsed":true}').visible()).toBe(false);
    });

    it('treats invalid stored values as expanded', () => {
      expect(create('"nope"').visible()).toBe(true);
      expect(create('{"collapsed":"yes"}').visible()).toBe(true);
    });
  });

  describe('on narrow screens', () => {
    beforeEach(() => mockViewport(true));

    it('starts with the drawer closed even if collapsed=false was stored', () => {
      expect(create('{"collapsed":false}').visible()).toBe(false);
    });

    it('opens and closes the drawer without persisting it', () => {
      const state = create();
      state.toggle();
      TestBed.tick();
      expect(state.visible()).toBe(true);
      expect(JSON.parse(localStorage.getItem(SIDEBAR_STORAGE_KEY)!)).toEqual({ collapsed: false });
      state.closeDrawer();
      expect(state.visible()).toBe(false);
    });
  });
});
