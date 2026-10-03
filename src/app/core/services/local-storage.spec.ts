import { TestBed } from '@angular/core/testing';
import { LocalStorage } from './local-storage';

const asBoolean = (raw: unknown): boolean => {
  if (typeof raw !== 'boolean') throw new Error('invalid');
  return raw;
};

describe('LocalStorage', () => {
  let storage: LocalStorage;

  beforeEach(() => {
    localStorage.clear();
    storage = TestBed.inject(LocalStorage);
  });

  afterEach(() => vi.restoreAllMocks());

  it('returns the fallback for a missing key', () => {
    expect(storage.read('missing', asBoolean, false)).toBe(false);
  });

  it('round-trips a value', () => {
    storage.write('flag', true);
    expect(storage.read('flag', asBoolean, false)).toBe(true);
  });

  it('returns the fallback for corrupt JSON', () => {
    localStorage.setItem('flag', '{not json');
    expect(storage.read('flag', asBoolean, false)).toBe(false);
  });

  it('returns the fallback when validation throws', () => {
    localStorage.setItem('flag', '"yes"');
    expect(storage.read('flag', asBoolean, false)).toBe(false);
  });

  it('survives storage that throws', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    expect(() => storage.write('flag', true)).not.toThrow();
    expect(storage.read('flag', asBoolean, false)).toBe(false);
  });
});
