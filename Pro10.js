//* Write a javascript program to print the factors of the number.
const prompt = require("prompt-sync")(); //! To get the input outside the chrome from prompt.
let num = prompt("Enter The Number Here : ");
num = Number.parseInt(num);
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    console.log(i);
  }
}
