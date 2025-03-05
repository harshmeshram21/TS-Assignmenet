// Array Methods
// Scenario: You have an array of numbers [2, 5, 8, 3, 10].
// Question: Write code to filter out even numbers, double each number, and calculate the sum of the transformed array.

let numbers = [2, 5, 8, 3, 10];
// filter out even numbers
let evenArr: number[] = [];

//  double even number
let dubleVale: number[] = [];

numbers.forEach((ele) => {
  if (ele % 2 == 0) {
    evenArr.push(ele);
    dubleVale.push(ele * 2);
  }
});

const transformed = dubleVale.reduce((sum, next) => sum + next);
console.log("even numbers : ", evenArr);
console.log("double the number : ", dubleVale);
console.log("transformed array : ", transformed);
