import { resultsSection } from '../utils/constants';
import Rhymes from './Rhymes';
import Rhyme from './Rhyme';
import { Api } from './Api';

function Results({ theme, word, engine, query }) {
  const api = new Api();
  return (
    <div className="results">
      <Rhymes 
        title={resultsSection[0].title}
        suffix={resultsSection[0].suffix}
        key={resultsSection[0].suffix}
      >
        {
          api.getRhyme(word, engine, theme, query)
            .then(res => 
              res.map(item => (
              <Rhyme
                word={item.word}
                key={item.word}
              />
            )))
        }
      </Rhymes>
      <Rhymes 
        title={resultsSection[1].title}
        suffix={resultsSection[1].suffix}
        key={resultsSection[1].suffix}
      />
      <Rhymes 
        title={resultsSection[2].title}
        suffix={resultsSection[2].suffix}
        key={resultsSection[2].suffix}
      />
      <Rhymes 
        title={resultsSection[3].title}
        suffix={resultsSection[3].suffix}
        key={resultsSection[3].suffix}
      />
      <Rhymes 
        title={resultsSection[4].title}
        suffix={resultsSection[4].suffix}
        key={resultsSection[4].suffix}
      />
      <Rhymes 
        title={resultsSection[5].title}
        suffix={resultsSection[5].suffix}
        key={resultsSection[5].suffix}
      />
      <Rhymes 
        title={resultsSection[6].title}
        suffix={resultsSection[6].suffix}
        key={resultsSection[6].suffix}
      />
      <Rhymes 
        title={resultsSection[7].title}
        suffix={resultsSection[7].suffix}
        key={resultsSection[7].suffix}
      />
    </div>
  );
}

export default Results;