"use strict";

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.

const bakeryName = "Maison Sarah"; // bakeryName is a constant because the name of the bakery won't change.
let orderCount = 5; // orderCount is a variable because the number of orders can change.
let isOpen = true; // isOpen is a variable because the state of the bakery can change.
const openingHour = 7; // openingHour is a constant because the opening hour won't change.
let closingHour = 19; // closingHour is a variable because the closing hour can change.

console.log(bakeryName);
console.log(orderCount);
console.log(isOpen);
console.log(openingHour);
console.log(closingHour);

orderCount = 6;
console.log(orderCount);

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.
console.log(typeof bakeryName);
console.log(typeof orderCount);
console.log(typeof isOpen);
console.log(typeof openingHour);
console.log(typeof closingHour);
console.log(typeof null);
console.log(typeof undefined);

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.
let MilkPrice; // This variable is declared but not initialized, so it is `undefined`.
let startingInventory = null; // This variable is explicitly set to null, so it is `null`.

console.log(MilkPrice);
console.log(startingInventory);
console.log(typeof MilkPrice);
console.log(typeof startingInventory);

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";

const price = Number(priceText);
const count = Number(countText);
const flag = Boolean(flagText);
const inventoryCount = 60;
const StockCount = String(inventoryCount);

console.log(price, typeof price);
console.log(count, typeof count);
console.log(flag, typeof flag);
console.log(inventoryCount, typeof inventoryCount);
console.log(StockCount, typeof StockCount);
//console.log(Number("Monkeypark"));

// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
//const bakeryName = "Maison Sarah";
//bakeryName = "The Corner Bakery";
//openingHour = 7;
//console.log(loafCount);
//let loafCount = 12;
//bakeryName has already been declared and now been reassigned, which is not allowed for const variables.
//openingHour has not been declared with let or var, so it is not defined.
//loafCount is being logged before its declaration, which will result in a ReferenceError.
const vendorName = "The Corner Bakery";
const openingHours = 7;
let loafCount = 12;
console.log(loafCount);

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.
let a = 5;
let b = 10;
let temp;

temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
