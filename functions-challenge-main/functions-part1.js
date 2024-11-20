let fox = "Jumped Over The Lazy Dog";

// challenge 1
// readme.md link to challenge 1
// The goal of this challenge is to create a function that will take in a string
// and return an additional string at the end. YOU CANNOT APPEND THE STRING MANUALLY.
function jumpOverFence(fox) {
  // your code here (HINT: use string interpolation, WHICH IS ADDING A VARIABLE TO A STRING)
  // complete this so that the function returns "The Lazy Brown Fox Jumps Over The Fence"
  let text = `The Lazy Brown Fox ${fox.substring(0, 15)} Fence`;
  return text;
}

// test the function
console.log(jumpOverFence(fox)); // should return "The Lazy

// challenge 2
// You will need to take a number and return true or false if the number is even or odd
function isEvenOrOdd(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// test the function
console.log(isEvenOrOdd(10)); // should return true
console.log(isEvenOrOdd(5)); // should return false

// challenge 3
// The goal of this challenge is to create a function that will convert celsius to fahrenheit
function celsiusToFahrenheit(celsiusNumber) {
  // your code here (HINT: use the formula (C * 9/5) + 32) and return the new fahrenheit number passed in as celsius
  let c = celsiusNumber;
  return c * (9 / 5) + 32;
}
// function fahrenheitToCelsius(fahrenheitNumber) {
//   //bounus funtion :)
//   let f = fahrenheitNumber;
//   return (f - 32) * (5 / 9);
// }

// test the function with degree symbol
console.log(celsiusToFahrenheit(30)); // should return 86
console.log(celsiusToFahrenheit(0)); // should return 32
// console.log(fahrenheitToCelsius(86));// this returns 30
// console.log(fahrenheitToCelsius(32));// this returns 0

// challenge 4
// find the max number in an array
function findMaxNumber(arr) {
  // your code here (HINT: use Math.max)
  return Number(Math.max(...arr));
}

// test the function
console.log(findMaxNumber([1, 2, 3, 4, 5])); // should return 5

// challenge 5
//  create a function that will wait 2 seconds and then log "Hello World"
function sayHelloWorld() {
  // your code here (HINT: use setTimeout)
  console.log("Hello World");
}
// test the function
let mytimeout = setTimeout(sayHelloWorld, 2000); // should log "Hello World" after 2 seconds
