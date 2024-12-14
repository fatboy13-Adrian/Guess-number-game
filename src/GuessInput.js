//Component for the input field where the user enters their guess
export default function GuessInput({guess, setGuess, gameOver}) 
{
  //Handler for changes in the input field
  const handleInputChange = (e) => 
  {
    const value = e.target.value;               //Get the input value
    if (!isNaN(value)) setGuess(Number(value)); //Check if the value is a number; if so, update the guess state
  };

  return (
      //Container for the input field and label
      <div className="guess-container">
          <label htmlFor="guess-input">Enter guess</label>  {/*Label for the input field*/}
          
          {/*Input field for the user's guess*/}
          <input
              id="guess-input"              //Unique identifier for the input
              type="text"                   //Input type is text
              onChange={handleInputChange}  //Calls the handler on value change
              value={guess}                 //Binds the input to the current guess state
              disabled={gameOver}           //Disables input when the game is over
          />
      </div>
  );
}
