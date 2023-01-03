import { useState } from 'react';

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
    title: 'Suggested Related Adjectives',
    suffix: 'rel-adj'
  },
  {
    title: 'Suggested Related Nouns',
    suffix: 'rel-noun'
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

export function useForm(inputValues) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event) => {
    const {value, name} = event.target;
    setValues({...values, [name]: value});
  };
  return {values, handleChange, setValues};
}

export {resultsSection};