//* Write a javascript program to print which number is greater from three numbers.
const prompt = require("prompt-sync")(); //! To get the input outside the chrome from prompt.

//? Get the number from the user
let num1 = prompt("Enter The Number 1 Here : ");
num1 = Number.parseInt(num1);
let num2 = prompt("Enter The Number 2 Here : ");
num2 = Number.parseInt(num2);
let num3 = prompt("Enter The Number 3 Here : ");
num3 = Number.parseInt(num3);

//? Check the condition which is the greater among them
if (num1 > num2 && num1 > num3) {
  console.log(num1, "Is greater among them!");
} else if (num2 > num3) {
  console.log(num2, "Is greater among them!");
} else {
  console.log(num3, "Is greater among them!");
}
