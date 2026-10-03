/** Section kinds in the fixed order every tense page follows. */
export enum SectionKind {
  Usage = 'usage',
  Endings = 'endings',
  Conjugation = 'conjugation',
  Irregular = 'irregular',
  SignalWords = 'signal-words',
  Examples = 'examples',
  Comparison = 'comparison',
  Notes = 'notes',
}

export const SECTION_ORDER: readonly SectionKind[] = Object.values(SectionKind);
