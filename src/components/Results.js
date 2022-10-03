import { resultsSection } from '../utils/constants';
import Rhymes from './Rhymes';

function Results() {
  return (
    <div className="results">
      {
        resultsSection.map(section => (
          <Rhymes 
            title={section.title}
            suffix={section.suffix}
          />
        ))
      }
    </div>
  );
}

export default Results;