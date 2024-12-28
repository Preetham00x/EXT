// Arithmetic Operators
let a = 10;
let b = 5;

console.log("Addition:", a + b);  // 10 + 5 = 15
console.log("Subtraction:", a - b);  // 10 - 5 = 5
console.log("Multiplication:", a * b);  // 10 * 5 = 50
console.log("Division:", a / b);  // 10 / 5 = 2
console.log("Modulus:", a % b);  // 10 % 5 = 0
console.log("Exponentiation:", a ** b);  // 10 ** 5 = 100000

// Assignment Operators
let c = 20;
c += 5;  // c = c + 5
console.log("c after += 5:", c);  // 25
c -= 3;  // c = c - 3
console.log("c after -= 3:", c);  // 22

// Comparison Operators
console.log("Is a greater than b?", a > b);  // true
console.log("Is a less than b?", a < b);  // false
console.log("Is a equal to b?", a == b);  // false

// Logical Operators
let x = true;
let y = false;
console.log("x AND y:", x && y);  // false
console.log("x OR y:", x || y);  // true
console.log("NOT x:", !x);  // false

// Ternary Operator
let result = (a > b) ? "a is greater" : "b is greater";
console.log(result);  // "a is greater"