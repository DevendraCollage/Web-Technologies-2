//* Write a javascript program to print the number is prime or not.
const prompt = require("prompt-sync")(); //! To get the input outside the chrome from prompt.
let num = prompt("Enter The Number Here : ");
num = Number.parseInt(num);
let flag = true;
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    flag = false;
    break;
  }
}
if (flag == false) {
  console.log("The Number is not Prime!");
} else {
  console.log("The Number is Prime!");
}
