function Rhyme({word}) {
  return (
    <li class="rhyme col col-md-auto" title={word}>
      {word}
    </li>
  );
}

export default Rhyme;