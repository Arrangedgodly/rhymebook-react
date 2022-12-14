import React from "react";
import { getLastWord } from "../utils/constants";

function Form({ theme, body, word, engine, query, handleThemeChange, handleBodyChange, handleWordChange, handleQueryChange, handleBroad, handleSpecific }) {

  return (
    <form className="form note-form">
          <label htmlFor="title" className="form-label"
            >Themes
            <input
              name="title"
              type="text"
              className="form-input form-input-title"
              value={theme}
              onChange={handleThemeChange}
            />
          </label>
          <label htmlFor="body" className="form-label"
            >Lyrics
            <textarea
              name="body"
              type="text"
              className="form-input form-input-body"
              value={body}
              onChange={handleBodyChange}
              onKeyDown={handleWordChange}
            >
            </textarea>
          </label>
          <h3 className="form-label">Search Engine</h3>
          <div className="form-engine">
            <div className="form-engine-wrapper">
              <label htmlFor="broad" className="form-label-alt"
                >Broad
                <input
                  name="engine"
                  id="broad"
                  type="radio"
                  className="form-input-alt"
                  onClick={handleBroad}
                  defaultChecked
                />
              </label>
              <p className="form-input-desc">
                Provides more search results, less considerate of Themes
              </p>
            </div>
            <div className="form-engine-wrapper">
              <label htmlFor="specific" className="form-label-alt"
                >Specific
                <input
                  name="engine"
                  id="specific"
                  type="radio"
                  className="form-input-alt"
                  onClick={handleSpecific}
                />
              </label>
              <p className="form-input-desc">
                Provides less search results, but guarentees thematic tie ins
              </p>
            </div>
          </div>
          <label htmlFor="max" className="form-label"
            >Max Query Returns
            <input
              name="max"
              type="range"
              min="10"
              max="200"
              step="10"
              value={query}
              className="form-input form-input-max"
              onChange={handleQueryChange}
            />
            {query}
          </label>
          <p className="form-label form-label-max"></p>
        </form>
  );
}

export default Form;