// DATA TYPES
// Number
let num = 3;
num = 88;
console.log(num); //output is 88
// NaN represents a computational error. It is a result of an incorrect 
// or an undefined mathematical operation.
// connsole.log( "not a number" / 2 );   shows NaN
//console.log(k/2);   // Outputs: NaN
console.log(NaN + 1); // Outputs: NaN
console.log(3 * NaN); // Outputs: NaN
//console.log(k/2-1);      // Outputs: NaN
// So, if there’s a NaN somewhere in a mathematical expression, it propagates
// to the whole result (there’s only one exception to that: NaN ** 0 is 1).
console.log(NaN ** 0); // Outputs: 1
console.log(NaN ** 1); // Outputs: NaN
//----------------------------------------------------------------------------
// BigInt
// The “number” type cannot safely represent integer values larger than (253-1) 
// (that’s 9007199254740991), or less than -(253-1) for negatives.
// For example, these two numbers (right above the safe range) are the same:
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
// BigInt type represent integers of arbitrary length.
// A BigInt value is created by appending n to the end of an integer:
// the "n" at the end means it's a BigInt
const myNum = 1234567890123456789012345678901234567890n;
console.log(myNum);
//----------------------------------------------------------------------------
// String
// A string in JavaScript must be surrounded by quotes.
// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: Hello.
let str1 = "Welcome";
let str2 = 'to Coding with hooriya';
let str3 = ` ${str1} ${str2}.`;
let a = `Result ${6 + 9}`; // Result 15
// Boolean (logical type)
// The boolean type has only two values: true and false.
// This type is commonly used to store yes/no values: true means “yes, correct”, 
// and false means “no, incorrect”.
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked
// Boolean values also come as a result of comparisons:
let isGreater = 7 > 5;
console.log(isGreater); // Outputs: true
// The “null” value
// The special null value does not belong to any of the types described above.
// It forms a separate type of its own which contains only the null value:
let age = null;
console.log(age); // null
// It’s just a special value which represents “nothing”, “empty” or “value unknown”.
// The code above states that age is unknown.
// The “undefined” value
// The special value undefined also stands apart. It makes a type of its own, just like null.
// The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is undefined:
let myName;
// console.log(myName);   // Shows undefined
// Technically, it is possible to explicitly assign undefined to a variable:
let myAge = undefined;
console.log(myAge); // undefined
// Objects
// The object type is special.
// All other types are called “primitive” because their values can contain only
// a single thing (be it a string or a number or whatever). In contrast, objects
// are used to store collections of data and more complex entities.
// The typeof operator:
// The typeof operator returns the type of the operand. It’s useful when we want
// to process values of different types differently or just want to do a quick check.
// A call to typeof x returns a string with the type name:
console.log(typeof undefined); // Output: undefined
console.log(typeof 0); // Output: number
console.log(typeof true); // Output: boolean
console.log(typeof "Hello"); // Output: string
console.log(typeof Symbol("id")); // Output: symbol
console.log(typeof Math); // Output: object
// Math is a built-in object that provides mathematical operations.
console.log(typeof null); // Output: object
// Definitely, null is not an object. It is a special value with a separate type of 
// its own. The behavior of typeof is wrong here.
let x = "Karachi";
console.log(typeof (x)); // Output: string
console.log(typeof x); // Output: string
//----------------------------------------------------------------------------
// TASK
// What is the output of the script?
let name = "Ilya";
// the expression is a number 1
console.log(`hello ${1}`); // hello 1
// the expression is a string "name"
console.log(`hello ${name}`); // hello name
// the expression is a variable
console.log(`hello ${name}`);
export {};
// hello Ilya
