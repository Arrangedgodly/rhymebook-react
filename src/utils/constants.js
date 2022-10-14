const resultsSection = [
  {
    title: 'Suggested Rhymes',
    suffix: 'def'
  },
  {
    title: 'Suggested Slant Rhymes',
    suffix: 'sound'
  },
  {
    title: 'Suggested Related Nouns',
    suffix: 'rel-noun'
  },
  {
    title: 'Suggested Related Adjectives',
    suffix: 'rel-adj'
  },
  {
    title: 'Suggested Synonyms',
    suffix: 'rel-syn'
  },
  {
    title: 'Suggested Antonyms',
    suffix: 'rel-ant'
  },
  {
    title: 'Suggested Related Terms',
    suffix: 'rel'
  },
  {
    title: 'Suggested Following Words',
    suffix: 'follow'
  }
];

export function getLastWord(str) {
  return str.split(' ').pop();
}

export {resultsSection};