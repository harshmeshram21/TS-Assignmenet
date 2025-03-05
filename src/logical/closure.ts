// Closures
// Scenario: Create a counter function that increments by 1 each time it is called.
// Question: Implement this using closures. Explain how closures work in your solution.

function createCounter() {
  let count = 0;

  return function increments() {
    return ++count;
    // console.log(count);
  };
}
let increaseCount = createCounter();
console.log(increaseCount());
console.log(increaseCount());
console.log(increaseCount());
