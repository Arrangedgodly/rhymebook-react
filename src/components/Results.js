import { resultsSection } from "../utils/constants";
import React from "react";
import Rhymes from "./Rhymes";
import Rhyme from "./Rhyme";

function Results({ rhymes, soundAlikes, relatedAdjectives, relatedNouns, relatedWords, synonyms, antonyms, followers }) {
  const checkArray = (arr) => {
    if (arr.length > 0) {
      return true;
    }
    else {
      return false;
    }
  }
  
  return (
    <div className="results">
      <Rhymes
        title={resultsSection[0].title}
        suffix={resultsSection[0].suffix}
        key={resultsSection[0].suffix}
      >
        {checkArray(rhymes) && rhymes.map(rhyme => (
          <Rhyme 
            word={rhyme.word}
            key={rhyme.word}
          />
        ))}
      </Rhymes>
      <Rhymes
        title={resultsSection[1].title}
        suffix={resultsSection[1].suffix}
        key={resultsSection[1].suffix}
      >
        {checkArray(soundAlikes) && soundAlikes.map(rhyme => (
          <Rhyme 
            word={rhyme.word}
            key={rhyme.word}
          />
        ))}
      </Rhymes>
      <Rhymes
        title={resultsSection[2].title}
        suffix={resultsSection[2].suffix}
        key={resultsSection[2].suffix}
      >
        {checkArray(relatedAdjectives) && relatedAdjectives.map(rhyme => (
          <Rhyme 
            word={rhyme.word}
            key={rhyme.word}
          />
        ))}
      </Rhymes>
      <Rhymes
        title={resultsSection[3].title}
        suffix={resultsSection[3].suffix}
        key={resultsSection[3].suffix}
      >
        {checkArray(relatedNouns) && relatedNouns.map(rhyme => (
          <Rhyme 
            word={rhyme.word}
            key={rhyme.word}
          />
        ))}
      </Rhymes>
      <Rhymes
        title={resultsSection[4].title}
        suffix={resultsSection[4].suffix}
        key={resultsSection[4].suffix}
      >
        {checkArray(synonyms) && synonyms.map(rhyme => (
          <Rhyme 
            word={rhyme.word}
            key={rhyme.word}
          />
        ))}
      </Rhymes>
      <Rhymes
        title={resultsSection[5].title}
        suffix={resultsSection[5].suffix}
        key={resultsSection[5].suffix}
      >
        {checkArray(antonyms) && antonyms.map(rhyme => (
          <Rhyme 
            word={rhyme.word}
            key={rhyme.word}
          />
        ))}
      </Rhymes>
      <Rhymes
        title={resultsSection[6].title}
        suffix={resultsSection[6].suffix}
        key={resultsSection[6].suffix}
      >
        {checkArray(relatedWords) && relatedWords.map(rhyme => (
          <Rhyme 
            word={rhyme.word}
            key={rhyme.word}
          />
        ))}
      </Rhymes>
      <Rhymes
        title={resultsSection[7].title}
        suffix={resultsSection[7].suffix}
        key={resultsSection[7].suffix}
      >
        {checkArray(followers) && followers.map(rhyme => (
          <Rhyme 
            word={rhyme.word}
            key={rhyme.word}
          />
        ))}
      </Rhymes>
    </div>
  );
}

export default Results;
