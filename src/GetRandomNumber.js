//Utility function to generate a random number between 1 and 20
export default function getRandomNumber() 
{
    console.log("getRandomNumber called");  //Log a message to the console for debugging purposes
    return Math.floor(Math.random() * 20);  //Generate a random number between 0 and 19, then round it down to the nearest integer
}
