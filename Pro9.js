//* Write a javascript program to print the factorial of number.
const prompt = require("prompt-sync")(); //! To get the input outside the chrome from prompt.
let num = prompt("Enter The Number Here : ");
num = Number.parseInt(num);
let fact = 1;
for (let i = 1; i <= num; i++) {
  fact = fact * i;
}
console.log("The factorial of %d is : %d", num, fact);
