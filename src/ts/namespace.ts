//  The namespace is used for logical grouping of functionalities.
//  A namespace can include interfaces, classes, functions and
// variables to support a single or a group of related
// functionalities.
//  A namespace can be created using the namespace keyword followed
// by the namespace name.
//  All the interfaces, classes etc. can be defined in the curly
// brackets { }.

namespace mathOperation {
  export function add(num1: number, num2: number) {
    console.log(num1 + num2);
  }

  

  export function multiply(num1: number, num2: number) {
    console.log(num1 * num2);
  }
}

mathOperation.add(23, 45);
mathOperation.multiply(3, 5);
