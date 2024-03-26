#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random number 

// 2) User input for guessing number 

// 3) Compare user input with computer generated number and show result done


const randomNumber = Math.floor(Math.random()*25 + 1);

console.log("Welcome to number guessing game...!!");
const answers = await inquirer.prompt([
    {
        name : "userGuessNumber",
        type : "number",
        message : "Please guess a number between 1-12 :",
    }
]);

console.log(answers);

if(answers.userGuessNumber ===randomNumber) {
    console.log("Congratulations! you guessed right number....")
}else{
    console.log("Ohhh! BAD LUCK...! You guessed wrong number...." )
}