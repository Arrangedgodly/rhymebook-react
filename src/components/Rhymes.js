import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from '@fortawesome/free-regular-svg-icons';

function Rhymes(props) {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="rhymes-wrapper">
      <h2 className="rhymes-title">
        {props.title}
        <button type="button" className="eye">
          <FontAwesomeIcon icon={faEye} className="fa-regular fa-eye" onClick={toggleOpen} />
        </button>
      </h2>
      {isOpen && (
        <ul className={`rhymes rhymes-${props.suffix}`}>
        {props.children}
      </ul>
      )}
    </div>
  );
}

export default Rhymes;
