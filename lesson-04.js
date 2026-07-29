"use strict";

// Lesson 04 exercise: Operators and conditionals
// In your exercise repository, create a branch named `lesson-04-exercise` and switch to it,
// then open `lesson-04.js`, where the questions wait as comments. The file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// The file lists ten expressions that mix coercion, strict comparison, and logical
// combination, among them `3 === "3"`, `1 + true`, and `!(5 > 2)`. Write your predicted result
// as a comment beside each expression before running the file, then run it and correct any
// misses, leaving both the prediction and the actual result visible.

// * The provided expressions, write your prediction beside each before running:
console.log(3 === "3"); // prediction:false
console.log(3 == "3"); // prediction:true
console.log("5" - 1); // prediction:4
console.log("5" + 1); // prediction:"51"
console.log(1 + true); // prediction:2
console.log(10 >= 10); // prediction:true
console.log(!(5 > 2)); // prediction:false
console.log(4 !== "4"); // prediction:true
console.log("b" > "a"); // prediction:true
console.log(0 === -0); // prediction:true

// TODO: Part two.
// Write one `if` statement with an `else` branch on a variable of your choosing. Run the file
// twice with different values so that each branch has printed at least once, and record each
// run's output in a comment.
const dayOfWeek = "Monday";

if (dayOfWeek === "Monday") {
  console.log("Start of the work week");
} else {
  console.log("Midweek or weekend");
}

// TODO: Part three.
// Build an `else if` chain for order pricing: more than 12 items produces one message, more
// than 6 another, and everything else a third. Run it with values that reach every branch, and
// add a comment explaining why the most specific question must be asked first.
const orderQuantity = 8;
if (orderQuantity > 12) {
  console.log("Large order, call the bakery ahead");
} else if (orderQuantity > 6) {
  console.log("Medium order, ready in an hour");
} else {
  console.log("Small order, walk right in");
}
//The most specific question must be asked first to ensure the correct branch is executed for each order quantity.

// TODO: Part four.
// For each of the eight provided values, which include `0`, `"0"`, an empty string, and a
// single space, predict in a comment whether it is truthy or falsy. Verify each prediction
// with `Boolean()` and correct your misses.

// * The eight provided values:
const courtValues = [false, 0, "0", "", " ", "bread", null, undefined];
//falsy: false, 0, "", null, undefined
//truthy: "0", " ", "bread"

// TODO: Part five.
// Rewrite the provided day-based `if` chain as a `switch` statement with a `default` case and
// a `break` in every case, and confirm that it prints the same answers for three test days.

// * The provided day-based if chain, rewrite it as a switch beneath it:
/*const day = "Sunday";
if (day === "Saturday") {
  console.log("Open 7:00 to 14:00");
} else if (day === "Sunday") {
  console.log("Open 8:00 to 12:00");
} else if (day === "Monday") {
  console.log("Closed today");
} else {
  console.log("Open 7:00 to 18:00");
}
  */
const day = "Sunday";
switch (day) {
  case "Saturday":
    console.log("Open 7:00 to 14:00");
    break;
  case "Sunday":
    console.log("Open 8:00 to 12:00");
    break;
  case "Monday":
    console.log("Closed today");
    break;
  default:
    console.log("Open 7:00 to 18:00");
}

// * The provided broken program, run it, observe both incorrect behaviors, then repair both:
let shopStatus = "closed";
if ((shopStatus = "open")) {
  console.log("Welcome in");
}
const size = "M";
switch (size) {
  case "S":
    console.log("Small");
  case "M":
    console.log("Medium");
  case "L":
    console.log("Large");
    break;
  default:
    console.log("Unknown size");
}

// TODO: Part seven.
// Two classic exercises close the lesson. First, the leap year checker: a year is a leap year
// when it is divisible by 4 and not by 100, unless it is also divisible by 400. Implement the
// rule with the remainder operator and logical operators, and test it against 2024, 1900, and
// 2000. Second, FizzBuzz for a single number: for one number variable, print Fizz when it is
// divisible by 3, Buzz when it is divisible by 5, FizzBuzz when it is divisible by both, and
// the number itself otherwise. The loops lesson scales this to one hundred.
const leapYear = 2024;
if ((leapYear % 4 === 0 && leapYear % 100 !== 0) || leapYear % 400 === 0) {
  console.log(leapYear + " is a leap year");
} else {
  console.log(leapYear + " is not a leap year");
}
const fizzBuzzNumber = 15;
if (fizzBuzzNumber % 3 === 0 && fizzBuzzNumber % 5 === 0) {
  console.log("FizzBuzz");
} else if (fizzBuzzNumber % 3 === 0) {
  console.log("Fizz");
} else if (fizzBuzzNumber % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(fizzBuzzNumber);
}

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
