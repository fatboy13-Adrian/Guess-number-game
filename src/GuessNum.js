import React, {useState} from "react";
import getRandomNumber from "./GetRandomNumber";  //Import utility function to generate random number
import GuessInput from "./GuessInput";            //Import GuessInput component
import GameButtons from "./GameButtons";          //Import GameButtons component
import GuessHistory from "./GuessHistory";        //Import GuessHistory component

//Main component for the Guess Number Game
export default function GuessNumberGame() 
{
  const [number, setNumber] = useState(() => getRandomNumber());  //State for the number to guess
  const [guess, setGuess] = useState("");                         //State for the current guess input
  const [pastGuesses, setPastGuesses] = useState([]);             //State to track the history of past guesses
  const [message, setMessage] = useState("Start guessing");       //State for the message displayed to the user
  const [gameOver, setGameOver] = useState(false);                //State to determine if the game is over

  //Handler function for making a guess
  const guessHandler = () => 
  {
    //Check if the guess is correct
    if (guess === number) 
    {
      setMessage(`You got it! The answer is ${guess}`); //Display success message
      setGameOver(true);                                //End the game
      return;
    }
    
    setPastGuesses((prevState) => [...prevState, guess]); //Update past guesses with the current guess

    //Provide feedback if the guess is too high or too low
    if (guess > number) setMessage(`${guess} is too big!`);
    else if (guess < number) setMessage(`${guess} is too small!`);
    
    setGuess(""); //Clear the input field for the next guess
  };

  //Handler function to reset the game for a new round
    const newGameHandler = () => 
    {
      setGuess("");                 //Reset the guess input
      setMessage("Start guessing"); //Reset the message
      setPastGuesses([]);           //Clear the past guesses
      setNumber(getRandomNumber()); //Generate a new random number
      setGameOver(false);           //Set gameOver to false
    };

  return (
    <div>
      {/*Game title and instructions*/}
      <h1>Guess Number Game</h1>
      <p>Guess a number between 1 and 20.</p>
      <GuessInput guess={guess} setGuess={setGuess} gameOver={gameOver} />  {/*Component for inputting guesses*/}
      {/*Component for game action buttons*/}
      <GameButtons 
        guessHandler={guessHandler} 
        newGameHandler={newGameHandler} 
        gameOver={gameOver} 
      />

      <p>{message}</p>  {/*Display the current message*/}
      
      <GuessHistory pastGuesses={pastGuesses} />    {/*Component to display the history of guesses*/}
    </div>
  );
}
