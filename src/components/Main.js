import React from "react";
import Form from "./Form";
import Results from "./Results";
import { getLastWord } from "../utils/constants";

function Main() {
  const [theme, setTheme] = React.useState('');
  const [body, setBody] = React.useState('');
  const [word, setWord] = React.useState('');
  const [engine, setEngine] = React.useState('topic');
  const [query, setQuery] = React.useState(50);

  function handleThemeChange(e) {
    setTheme(e.target.value);
  }

  function handleBodyChange(e) {
    setBody(e.target.value);
  }

  function handleWordChange(e) {
    if (e.key === ' ' || e.key === 'Enter') {
      handleWord();
    }
  }

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  function handleWord() {
    setWord(getLastWord(body));
  }

  function handleBroad() {
    setEngine('topic');
  }

  function handleSpecific() {
    setEngine('ml');
  }

  return (
    <div className="page">
      <Form 
        theme={theme}
        body={body}
        word={word}
        engine={engine}
        query={query}
        handleThemeChange={handleThemeChange}
        handleBodyChange={handleBodyChange}
        handleWordChange={handleWordChange}
        handleQueryChange={handleQueryChange}
        handleBroad={handleBroad}
        handleSpecific={handleSpecific}
      />
      <Results 
        theme={theme}
        word={word}
        engine={engine}
        query={query}
      />
    </div>
  );
}

export default Main;