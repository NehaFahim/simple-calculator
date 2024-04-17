#! /usr/bin/env node
// (this 1 line we write this the path of sharing our project to others)
//"SHABANG" ( this 1 line code we have written that called shabang)

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter my first number", type: "number", name: "firstNumber" },
  { message: "enter my second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplaction", "Division"],
  },
]);

// conditional statement  based on user's choice of operator
if (answer.operator === "Addition") {
    console.log( answer.firstNumber + answer.secondNumber);
} else if(answer.operator === "Subtraction"){
   console.log( answer.firstNumber  - answer.secondNumber) ;
}else if(answer.operator ==="Multiplaction"){
    console.log( answer.firstNumber * answer.secondNumber );

} else if(answer.operator === "Division") {
    console.log(answer.firstNumber  / answer.secondNumber);
} else {
    console.log("Select a valid operator");
}

console.log(answer); 