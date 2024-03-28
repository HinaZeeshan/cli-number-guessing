#! /usr/bin/env node

import inquirer from "inquirer";
// 1) computer will generate a random number

// 2)user input for guessing number

// 3)compare user input with computer generated number and show the result

const randomNumber = Math.floor(Math.random() *6+1);
const answer = await inquirer.prompt([
  {
    name: "userGuessnumber",
    type: "number",
    message: "please guess a number between 1 -10: ",
  },
]);

if(answer.userGuessnumber === randomNumber){
    console.log("congratulation!you guess right number")
}
else{
    console.log("oops! you guessed the wrong number")
}
