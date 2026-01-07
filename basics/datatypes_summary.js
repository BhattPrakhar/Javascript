// JavaScript is a dynamically typed (or loosely typed) language. This means that you do not need to explicitly declare the data type of a variable when you create it, and a variable can hold values of different types during its lifetime in the program's runtime
 const s=100;
 const score = 100.2;
 const id= Symbol('123')
const anotherID = Symbol('123')
console.log(anotherID === id);


// PRIMITIVE - CALL BY VALUE

// 7 TYPES: string, boolean, number, null, undefined, symbol, BigInt

// (REFERENCE) NON- PRIMITIVE
// ARRAY, OBJECTS, FUNCTIONS

const heros = ["Prakhar", "Raksha", "Mayank"]
 let myobj = {
    name : "prakhar",
    age: 22,
 }

  const myFunction = function(){
    console.log("Hello World")
  }
console.log(typeof myFunction)
 