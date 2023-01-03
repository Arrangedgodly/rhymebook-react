import { useState, useEffect } from "react";
import Form from "./Form";
import Results from "./Results";
import { getLastWord } from "../utils/constants";
import { Api } from "./Api";

function Main() {
  const [theme, setTheme] = useState('');
  const [body, setBody] = useState('');
  const [word, setWord] = useState('');
  const [engine, setEngine] = useState('topic');
  const [query, setQuery] = useState(50);
  const [rhymes, setRhymes] = useState([]);
  const [soundAlikes, setSoundAlikes] = useState([]);
  const [relatedAdjectives, setRelatedAdjectives] = useState([]);
  const [relatedNouns, setRelatedNouns] = useState([]);
  const [relatedWords, setRelatedWords] = useState([]);
  const [synonyms, setSynonyms] = useState([]);
  const [antonyms, setAntonyms] = useState([]);
  const [followers, setFollowers] = useState([]);

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

  const handleRhymes = () => {
    api.getRhyme(word, engine, theme, query).then(res => {setRhymes(res)});
  }

  const handleSoundAlikes = () => {
    api.getSoundAlike(word, engine, theme, query).then(res => {setSoundAlikes(res)});
  }

  const handleRelatedAdjectives = () => {
    api.getRelatedAdjectives(word, engine, theme, query).then(res => {setRelatedAdjectives(res)});
  }
  
  const handleRelatedNouns = () => {
    api.getRelatedNouns(word, engine, theme, query).then(res => {setRelatedNouns(res)});
  }

  const handleRelatedWords = () => {
    api.getRelatedWords(word, engine, theme, query).then(res => {setRelatedWords(res)});
  }

  const handleSynonyms = () => {
    api.getSynonyms(word, engine, theme, query).then(res => {setSynonyms(res)});
  }

  const handleAntonyms = () => {
    api.getAntonyms(word, engine, theme, query).then(res => {setAntonyms(res)});
  }

  const handleFollowers = () => {
    api.getFrequentFollowers(word, engine, theme, query).then(res => {setFollowers(res)});
  }

  useEffect(() => {
    handleRhymes()
  }, [word])

  useEffect(() => {
    handleSoundAlikes()
  }, [word])

  useEffect(() => {
    handleRelatedAdjectives()
  }, [word])

  useEffect(() => {
    handleRelatedNouns()
  }, [word])

  useEffect(() => {
    handleRelatedWords()
  }, [word])

  useEffect(() => {
    handleSynonyms()
  }, [word])

  useEffect(() => {
    handleAntonyms()
  }, [word])

  useEffect(() => {
    handleFollowers()
  }, [word])

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
        soundAlikes={soundAlikes}
        relatedAdjectives={relatedAdjectives}
        relatedNouns={relatedNouns}
        relatedWords={relatedWords}
        synonyms={synonyms}
        antonyms={antonyms}
        followers={followers}
      />
    </div>
  );
}

export default Main;