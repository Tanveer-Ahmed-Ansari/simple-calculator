#! /user/bin/env node

import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    {message: "Enter first Number", type: "number", name: "firstNumber"},
    {message: "Enter second Number", tupe: "number", name: "secondNumber"},
    {message: "Slect one of the operators to perform operation",
    type: "list",
    name: "operators",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
},
])

if(asnwer.operators === "Addition"){
    console.log(asnwer.firstNumber + asnwer.secondNumber);
}else if (asnwer.operators === "Subtraction"){
    console.log(asnwer.firstNumber - asnwer.secondNumber);
}else if (asnwer.operators === "Multiplication"){
    console.log(asnwer.firstNumber * asnwer.secondNumber);
}else if (asnwer.operators === "Division"){
    console.log(asnwer.firstNumber / asnwer.secondNumber);
}else{
    console.log("please select a valid operator");
}