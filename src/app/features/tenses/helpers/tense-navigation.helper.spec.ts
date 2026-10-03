import { adjacentTenses } from './tense-navigation.helper';

describe('adjacentTenses', () => {
  it('starts at the first tense from the overview', () => {
    expect(adjacentTenses(null)).toEqual({
      previous: undefined,
      next: expect.objectContaining({ id: 'presente' }),
    });
  });

  it('returns both neighbours in catalogue order', () => {
    const { previous, next } = adjacentTenses('estar-gerundio');
    expect(previous?.id).toBe('presente');
    expect(next?.id).toBe('ir-a-infinitivo');
  });

  it('has no next tense after the last one', () => {
    const { previous, next } = adjacentTenses('imperfecto-subjuntivo');
    expect(previous?.id).toBe('presente-subjuntivo');
    expect(next).toBeUndefined();
  });
});
