// generic;

// 1. What are Generics?
// Generics allow you to create reusable components that can work with different types while maintaining type safety.

// 🔹 They help write flexible and scalable code.
// 🔹 Instead of specifying a fixed type, we use a placeholder (like <T> or <U>).
// 🔹 TypeScript infers the type automatically when we use generics.

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(getFirstElement([1, 3, 4, 5]).toFixed(2));
console.log(getFirstElement(["a", "b", "c"]).toUpperCase());
