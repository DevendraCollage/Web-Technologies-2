//* Write a javascript program to print 1 to 10 using for-loop.
const prompt = require("prompt-sync")(); //! To get the input outside the chrome from prompt.
let userNum = prompt("Enter The Number You Want to print : ");
userNum = Number.parseInt(userNum);
for (let i = 1; i <= userNum; i++) {
  console.log("The Number is :", i);
}
