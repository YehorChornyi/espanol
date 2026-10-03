import { isTenseId } from './tense-id.helper';

describe('isTenseId', () => {
  it('accepts known ids', () => {
    expect(isTenseId('presente')).toBe(true);
    expect(isTenseId('imperfecto-subjuntivo')).toBe(true);
  });

  it('rejects anything else', () => {
    expect(isTenseId('no-such-tense')).toBe(false);
    expect(isTenseId('')).toBe(false);
    expect(isTenseId(42)).toBe(false);
    expect(isTenseId(null)).toBe(false);
  });
});
