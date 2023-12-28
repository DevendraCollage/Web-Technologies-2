//* Write a javascript program to print the number is odd or even.
const prompt = require("prompt-sync")(); //! To get the input outside the chrome from prompt.
let num = prompt("Enter The Number Here : ");
num = Number.parseInt(num);
if (num % 2 == 0) {
  console.log(num, "Is Even Number!");
} else {
  console.log(num, "Is Odd Number!");
}
