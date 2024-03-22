#! /usr/bin/env node
import inquirer from "inquirer";
const answere = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    { message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"] },
]);
console.log(answere);
// Conditional Statement:
if (answere.operator === "Addition") {
    console.log(answere.firstNumber + answere.secondNumber);
}
else if (answere.operator === "Substraction") {
    console.log(answere.firstNumber - answere.secondNumber);
}
else if (answere.operator === "Multiplication") {
    console.log(answere.firstNumber * answere.secondNumber);
}
else if (answere.operator === "Division") {
    console.log(answere.firstNumber / answere.secondNumber);
}
else {
    console.log("Please select valid operator");
}
