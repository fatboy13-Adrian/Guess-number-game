//Component to display the history of past guesses
export default function GuessHistory({pastGuesses}) 
{
  return (
    //Container to hold the list of past guesses
    <div className="guesses-container">
      {/*Map over the pastGuesses array and render each guess*/}
      {pastGuesses.map((guess, index) => (

      <span key={index} className="guesses-number"> {/*Use a unique key (index) for each guess element*/}
        {guess}                                     {/*Display the value of the guess*/}
      </span>
      ))}
    </div>
  );
}
