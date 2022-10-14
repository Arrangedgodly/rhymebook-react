import React from "react";
import Form from "./Form";
import Results from "./Results";
import { getLastWord } from "../utils/constants";
import { Api } from "./Api";

function Main() {
  const [theme, setTheme] = React.useState('');
  const [body, setBody] = React.useState('');
  const [word, setWord] = React.useState('');
  const [engine, setEngine] = React.useState('topic');
  const [query, setQuery] = React.useState(50);
  const [rhymes, setRhymes] = React.useState([]);

  function handleThemeChange(e) {
    setTheme(e.target.value);
  }

  function handleBodyChange(e) {
    setBody(e.target.value);
  }

  function handleWordChange(e) {
    if (e.key === ' ' || e.key === 'Enter') {
      handleWord();
      handleRhymes();
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

  const handleRhymes = () => {
    setRhymes(api.getRhyme(word, engine, theme, query));
    console.log(rhymes);
  }

  const api = new Api();

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
        rhymes={rhymes}
      />
    </div>
  );
}

export default Main;