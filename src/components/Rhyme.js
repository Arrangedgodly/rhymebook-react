function Rhyme({word}) {
  return (
    <li className="rhyme col col-md-auto" title={word}>
      {word}
    </li>
  );
}

export default Rhyme;