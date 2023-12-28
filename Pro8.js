//* Write a javascript program to print the number is palindrome or not.
const prompt = require("prompt-sync")(); //! To get the input outside the chrome from prompt.
let num = prompt("Enter The Number Here : ");
num = Number.parseInt(num);
let temp = num;
if (isNaN(num)) {
  console.log("Please Enter A Valid Number!");
} else {
  let reverseNum = 0;
  let digit = 0;
  while (num > 0) {
    digit = num % 10;
    reverseNum = reverseNum * 10 + digit;
    num = Math.floor(num / 10);
  }
  console.log(reverseNum, "Is Reversed!");
  if (temp == reverseNum) {
    console.log("Is Palindrome Number!");
  } else {
    console.log("Not A Palindrome Number");
  }
}
