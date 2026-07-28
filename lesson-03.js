"use strict";

// Lesson 03 exercise: Strings and numbers
// In your exercise repository, create a branch named `lesson-03-exercise` and switch to it,
// then open `lesson-03.js`, where the questions wait as comments. Work beneath each question
// in order.

// TODO: Part one.
// Declare variables for a shop name, an opening hour, and a closing hour, then log one
// welcoming sentence built as a single template literal that uses all three.
const shopName = "Maison Sarah";
const openingHour = 8;
const closingHour = 18;
console.log(
  `Welcome to ${shopName}, we are open from ${openingHour} to ${closingHour}.`,
);

// TODO: Part two.
// The file provides a messy string with surplus spaces at both ends, the wrong case, and one
// word that needs replacing. Apply the methods from this lesson, chained or in sequence, to
// log the cleaned version, and add a comment naming each method you used and the job it
// performed.

// * The provided messy string:
const messy = "   Maison   Sarah, fresh bread daily   ";
console.log(messy.trim());
console.log(messy.toLowerCase());
console.log(messy.replace("bread", "pastry"));
//trim(): removes whitespace from both ends
//toLowerCase(): converts the string to lowercase
//replace(): replaces a specified substring with another substring

// TODO: Part three.
// Using the provided product string, log its length, the position at which a given word
// begins, and a slice containing exactly that word. Then split the provided comma-separated
// list and log the resulting pieces.

// * The provided product string and comma-separated list:
const product = "Sourdough Loaf, whole grain";
const flavorList = "rye,spelt,wheat,olive";
console.log(product.length);
console.log(product.indexOf("Loaf"));
console.log(product.slice(10, 14));
console.log(flavorList.split(","));

// TODO: Part four.
// From the net price and tax rate in the file, calculate the final price and log it inside a
// template literal, formatted to two decimal places. Add a comment explaining why the
// formatting step must come last.

// * The provided net price and tax rate:
const netPrice = 4.0;
const taxRate = 0.07;
const finalPrice = netPrice * (1 + taxRate);
console.log(`The final price is $${finalPrice.toFixed(2)}.`);
// The formatting step must come last because toFixed() converts the number to a string, and we want to perform the calculation before converting it to a string for display.

// TODO: Part five.
// Using the random recipe from this lesson, log a random whole number from 1 to 6. Then adapt
// the recipe to produce a number from 10 to 20, and explain your adaptation in a comment.
let randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);
randomNumber = Math.floor(Math.random() * 11) + 10;
console.log(randomNumber);
// I adapted the formula to change the range of the random number by adjusting the multiplier and the addition.

// TODO: Part six.
// Open the MDN String reference, choose one method this lesson did not cover, and use it
// correctly on a string of your choice. In a comment, cite the method's name and describe what
// it does in one sentence of your own words.
const exampleString = "Hello, World!";
console.log(exampleString.charAt(0));
// charAt(): returns the character at a specified index in a string.

// TODO: Part seven.
// Two classic exercises close the lesson. First, build a username generator: from a first name
// and a last name held in variables, produce a lowercase username in the pattern of first
// initial followed by full last name, such as mmustermann. Second, write a mad-libs story:
// declare four variables, an adjective, a noun, a verb, and a place, and log one short,
// ridiculous story built from a single template literal that uses all four.
const firstName = "John";
const lastName = "Doe";
const adjective = "quirky";
const noun = "unicorn";
const verb = "jumps";
const place = "the park";
const story = `${firstName} ${lastName} is a ${adjective} ${noun} who ${verb} in ${place}.`;
console.log(story);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
