"use strict";

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.
const menuItem = {
  name: "Chapati",
  price: 2.5,
  vegetarian: true,
  describe() {
    return `The ${this.name} costs €${this.price}.`;
  },
};

console.log(menuItem.name);
console.log(menuItem.price);
const key = "vegetarian";
console.log(menuItem[key]); // Bracket notation is required here because the key is stored in a variable.

// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.
menuItem.describe = function () {
  return `The ${this.name} costs €${this.price}.`;
};
console.log(menuItem.describe());

// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.

const menuItems = [
  {
    name: "Chapati",
    price: 2.5,
    vegetarian: true,
    describe() {
      return `${this.name} costs €${this.price} and is ${
        this.vegetarian ? "vegetarian" : "not vegetarian"
      }.`;
    },
  },
  {
    name: "Ugali",
    price: 1.5,
    vegetarian: true,
    describe() {
      return `${this.name} costs €${this.price} and is ${
        this.vegetarian ? "vegetarian" : "not vegetarian"
      }.`;
    },
  },
  {
    name: "Pilau",
    price: 3.0,
    vegetarian: false,
    describe() {
      return `${this.name} costs €${this.price} and is ${
        this.vegetarian ? "vegetarian" : "not vegetarian"
      }.`;
    },
  },
  {
    name: "Matoke",
    price: 2.0,
    vegetarian: true,
    describe() {
      return `${this.name} costs €${this.price} and is ${
        this.vegetarian ? "vegetarian" : "not vegetarian"
      }.`;
    },
  },
  {
    name: "Mokimo",
    price: 2.8,
    vegetarian: true,
    describe() {
      return `${this.name} costs €${this.price} and is ${
        this.vegetarian ? "vegetarian" : "not vegetarian"
      }.`;
    },
  },
];

for (const item of menuItems) {
  console.log(item.describe());
}

// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
const vegetarianNames = menuItems
  .filter((item) => item.vegetarian)
  .map((item) => item.name);
console.log(vegetarianNames);

const cheapItem = menuItems.find((item) => item.price < 3);
console.log(cheapItem);
if (cheapItem) {
  console.log(`${cheapItem.name} costs €${cheapItem.price}`);
}
// Add a comment stating what `find` returns when nothing matches.
// find returns undefined when nothing matches.

// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.
const item = menuItems[0];
for (const [key, value] of Object.entries(item)) {
  console.log(`${key}: ${value}`);
}

// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.
const Ugali = { ...item, price: 3.0 };
console.log(item);
console.log(Ugali);

// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
const sentence =
  "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";

const wordCounts = {};
for (const word of sentence.split(" ")) {
  wordCounts[word] = (wordCounts[word] || 0) + 1;
}
console.log(wordCounts);

const sortedEntries = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);
console.log(sortedEntries);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
