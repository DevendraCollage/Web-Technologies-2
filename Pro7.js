//* Write a javascript program to print Fibonacci series.
const prompt = require("prompt-sync")(); //! To get the input outside the chrome from prompt.
let num = prompt("Enter The Number Here : ");
num = Number.parseInt(num);
let first = 0;
let second = 1;
let nextTerm;
for (let i = 0; i <= num; i++) {
  console.log(first);
  nextTerm = first + second;
  first = second;
  second = nextTerm;
}
