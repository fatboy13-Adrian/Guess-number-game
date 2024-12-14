//Component to render the game action buttons
export default function GameButtons({guessHandler, newGameHandler, gameOver}) 
{
  return (
    //Container to hold the buttons
    <div className="buttons-container">
      <button type="button" onClick={guessHandler} disabled={gameOver}>Guess!</button>  {/*Button to submit the guess and disabled if game is over*/}
      <button type="button" onClick={newGameHandler}>New Game</button>                  {/*Button to start a new game */}
    </div>
  );
}
