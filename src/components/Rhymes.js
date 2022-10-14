import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-regular-svg-icons';

function Rhymes(props) {
  return (
    <div className="rhymes-wrapper">
      <h2 className="rhymes-title">
        {props.title}
        <button type="button" className="eye">
          <FontAwesomeIcon icon={faEye} className="fa-regular fa-eye" />
        </button>
      </h2>
      <ul className={`rhymes rhymes-${props.suffix}`}>
        {props.children}
      </ul>
    </div>
  );
}

export default Rhymes;
