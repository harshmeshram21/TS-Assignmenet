// Scenario: You’re building a library management system. Each book has properties like title, author, and isAvailable.
// Question: Create an array of objects to represent the library. Write a function to list all available books.

const books: { title: string; author: string; isAvailable: boolean }[] = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isAvailable: true,
  },
  { title: "1984", author: "George Orwell", isAvailable: false },
  { title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: true },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isAvailable: false,
  },
];
// console.log(books);

const availableBooks = books.filter((ele) => ele.isAvailable);
console.log("available Books are :", availableBooks);
