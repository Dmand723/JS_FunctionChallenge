// array challenges 1-5

// You will need to create 3 arrays and use them to solve the following challenges:

// challenge 1
function findLargestNumber(arr) {
  // Your code here (HINT: use Math.max)
  let max = Math.max(...arr);
  return max;
}

console.log(findLargestNumber([3, 6, 2, 8, 4])); // Should output: 8

// challenge 2
// create an array of words and only rerturn words that are 5 characters long
function removeDuplicates(arr) {
  // Your code here (HINT: use Set)
  let removed = new Set(arr);
  return removed;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Should output: [1, 2, 3, 4, 5]

// challenge 3
function filterEvenNumbers(arr) {
  // Your code here (HINT: use filter)
  return arr.filter(checkEven);
}
function checkEven(num) {
  if (num % 2 == 0) {
    return num;
  }
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // Should output: [2, 4]

// challenge 4 (optional)
function filterArray(arr, steps) {
  // Your code here (HINT: use slice, and concat methods)
  let arr1 = arr.slice(steps);
  let arr2 = arr.slice(0, steps);
  return arr1.concat(arr2);
}

console.log(filterArray([1, 2, 3, 4, 5], 2)); // Should output: [3, 4, 5, 1, 2]

// challenge 5 (optional)
function rotateArray(arr, steps) {
  // Your code here (HINT: use slice, and concat methods)
  let arr1 = arr.slice(3, steps + 3);
  let arr2 = arr.slice(0, steps + 1);
  return arr1.concat(arr2);
}
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Should output: [4, 5, 1, 2, 3]
