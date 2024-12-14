
import GuessNumberGame from "./GuessNum";  //Import the GuessNumberGame component from the file "GuessNumberGame"
import "./App.css";                            //Import the CSS file for styling the application

//Define the main App component
export default function App() 
{
  //Return the JSX structure for rendering the app
  return (
    <div>
      <GuessNumberGame/>   {/*Render the GuessNumberGame component inside a <div>*/}
    </div>
  );
}