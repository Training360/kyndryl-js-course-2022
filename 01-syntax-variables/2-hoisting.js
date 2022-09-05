// function hoisting
hello();
function hello () {
  console.log('Hello')
}

// variable hoisting - var
console.log(num); // undefined
var num;
num = 6;

// console.log(num2); //ReferenceError: num2 is not defined
// num2 = 8;

// variable hoisting - let
console.log(num3);  // ReferenceError: Cannot access 'num3' before initialization
let num3;
num3 = 2;