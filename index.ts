import Prompt from 'prompt-sync';
import { GREEN, RED, WHITE } from './types';

const prompt = Prompt();

const attempts = prompt("Enter number of attempts: ");
const inputStr = prompt("Enter the characters: ");

const characters: string[] = Array.from(inputStr);
let countChars = characters.length;
let response = {correct: 0, wrong: 0};

let showNext = 0;

while(showNext < Number(attempts)) {
  const random = Math.floor(Math.random() * countChars);
  console.log("Type: ", characters[random]);
  const enteredInput = prompt("");
  if (enteredInput == characters[random]) {
    response.correct++;
    console.log(`${GREEN}%s${WHITE}`, '✔');
  } else {
    response.wrong++;
    console.log(`${RED}%s${WHITE}`, '✖');
  }
  console.log(`${WHITE}%s${GREEN}%s${WHITE}%s${RED}%s${WHITE}`, 'Correct: ', response.correct, ' Wrong: ', response.wrong);
  showNext++;
}

console.log(`You have ${response.correct} Correct response and ${response.wrong} Wrong response`);

console.log("Thank You");
