"use strict";

// Lesson 08 exercise: Classes
// In your exercise repository, create a branch named `lesson-08-exercise` and switch to it,
// then open `lesson-08.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Write an `Artist` class with a constructor that receives a name, a genre, and a total
// runtime, and a `describe` method that returns one sentence built from the instance's own
// properties through `this`. Create two instances with `new` and log both descriptions.
class Artist {
  constructor(name, genre, totalRuntime) {
    this.name = name;
    this.genre = genre;
    this.totalRuntime = totalRuntime;
  }

  describe() {
    return `${this.name} is a ${this.genre} artist with a total runtime of ${this.totalRuntime} minutes.`;
  }
}

const artist1 = new Artist("Sauti Sol", "Afropop", 240);
const artist2 = new Artist("Adele", "Pop", 180);

console.log(artist1.describe());
console.log(artist2.describe());

// TODO: Part two.
// The file provides the artists as an array of plain objects. Loop over it with `for...of`,
// create an `Artist` instance from each object with `new`, collect the instances into a new
// array with `push`, and log every description with a second loop or `forEach`.

// * The artists as plain objects, provided:
/*const artistData = [
  { name: "Pinkfong", genre: "Children's music", total: "11:31" },
  { name: "Adriano Celentano", genre: "Italian pop", total: "20:52" },
  { name: "Asake", genre: "Afrobeats", total: "14:08" },
  { name: "Miyagi and Andy Panda", genre: "Hip-hop", total: "16:21" },
  { name: "Johnny Cash", genre: "Country", total: "15:40" },
];
*/
class MusicArtist {
  constructor(name, genre, totalRuntime) {
    this.name = name;
    this.genre = genre;
    this.totalRuntime = totalRuntime;
  }

  describe() {
    return `${this.name} is a ${this.genre} artist with a total runtime of ${this.totalRuntime}.`;
  }
}

const artistData = [
  { name: "Pinkfong", genre: "Children's music", total: "11:31" },
  { name: "Adriano Celentano", genre: "Italian pop", total: "20:52" },
  { name: "Asake", genre: "Afrobeats", total: "14:08" },
  { name: "Miyagi and Andy Panda", genre: "Hip-hop", total: "16:21" },
  { name: "Johnny Cash", genre: "Country", total: "15:40" },
];

const artists = [];

for (const artist of artistData) {
  const musicArtist = new MusicArtist(artist.name, artist.genre, artist.total);
  artists.push(musicArtist);
}

artists.forEach((artist) => {
  console.log(artist.describe());
});

// TODO: Part three.
// The file contains three short snippets: a class call that is missing `new`, an arrow
// function used as a method that reads `this`, and a correct call. Predict the outcome of each
// in a comment before running, then verify one snippet at a time and correct your misses,
// leaving both prediction and result visible.

// * Three snippets. Predict each outcome in a comment, then verify one at a time.
// ! Snippet one, a class call missing new. Uncomment after part one, predict first:
// const broken = Artist("Pinkfong", "Children's music", "11:31");
// ! Snippet two, an arrow function used as a method that reads this:
// const single = { title: "Hurt", artist: "Johnny Cash", describe: () => `${this.title} by ${this.artist}` };
// console.log(single.describe());
// * Snippet three, the correct call. Uncomment after part one:
// console.log(new Artist("Asake", "Afrobeats", "14:08").describe());

// Snippet 1
// Prediction:
// Calling a class without `new` will throw a TypeError.

// Result after running:
// TypeError: Class constructor MusicArtist cannot be invoked without 'new'

// Correct version:
const artist5 = new MusicArtist("Pinkfong", "Children's music", "11:31");
console.log(artist5.describe());

// Snippet 2
// Prediction:
// The arrow function won't use the object's `this`.
// It will return "undefined by undefined" (or use the surrounding `this`).

const single = {
  title: "Hurt",
  artist: "Johnny Cash",
  describe: () => `${this.title} by ${this.artist}`,
};

console.log(single.describe());

// Result after running:
// "undefined by undefined"

// Correct version:
const fixedSingle = {
  title: "Hurt",
  artist: "Johnny Cash",
  describe() {
    return `${this.title} by ${this.artist}`;
  },
};

console.log(fixedSingle.describe());

// Snippet 3
// Prediction:
// This is a correct call. It will create a MusicArtist object
// and print its description.

// Result after running:
// Asake is a Afrobeats artist with a total runtime of 14:08.

console.log(new MusicArtist("Asake", "Afrobeats", "14:08").describe());

// TODO: Part four.
// Write a `FeaturedArtist` class that extends `Artist`, adds a blurb property through a
// constructor that calls `super` first, and overrides `describe` so that it builds on the
// superclass version through `super.describe()`. Promote one artist and log the result.
class FeaturedArtist extends Artist {
  constructor(name, genre, totalRuntime, blurb) {
    super(name, genre, totalRuntime); // Call the parent constructor first
    this.blurb = blurb;
  }

  describe() {
    return `${super.describe()} Featured artist: ${this.blurb}`;
  }
}

// Promote one artist
const featuredArtist = new FeaturedArtist(
  "Johnny Cash",
  "Country",
  "15:40",
  "A legendary country music icon.",
);

console.log(featuredArtist.describe());

// TODO: Part five.
// The file ends with a constructor function and two prototype method assignments, working code
// in the pre-2015 style. Do not rewrite it. Above each line, add a comment naming its
// equivalent in class syntax, then confirm by running that its behavior matches your `Artist`
// class.

// * Working pre-2015 code, provided. Do not rewrite it, annotate it:
// class ArtistOld { constructor(name, genre) { ... } }
function ArtistOld(name, genre) {
  this.name = name;
  this.genre = genre;
}
// describe() { return `${this.name}, ${this.genre}`; }
ArtistOld.prototype.describe = function () {
  return `${this.name}, ${this.genre}`;
};
// tag() { return `#${this.genre.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}`; }
ArtistOld.prototype.tag = function () {
  return `#${this.genre.toLowerCase().replaceAll(" ", "-").replaceAll("'", "")}`;
};
// Confirm the behavior
const oldArtist = new ArtistOld("Johnny Cash", "Country");

console.log(oldArtist.describe()); // Johnny Cash, Country
console.log(oldArtist.tag()); // #country

// TODO: Part six.
// As a stretch, add a static method `Artist.named` that receives an array of instances and a
// name and returns the matching instance using `find`, and log the description of the instance
// it returns. The `get` keyword from the extension is your alternative if getters caught your
// interest.
class PerformingArtist {
  constructor(name, genre, totalRuntime) {
    this.name = name;
    this.genre = genre;
    this.totalRuntime = totalRuntime;
  }

  describe() {
    return `${this.name} is a ${this.genre} performing artist with a total runtime of ${this.totalRuntime}.`;
  }

  // Static method that finds an artist by name
  static named(performingArtists, name) {
    return performingArtists.find((artist) => artist.name === name);
  }
}

// Create PerformingArtist instances
const performingArtists = [
  new PerformingArtist("Pinkfong", "Children's music", "11:31"),
  new PerformingArtist("Asake", "Afrobeats", "14:08"),
  new PerformingArtist("Johnny Cash", "Country", "15:40"),
];

// Find one artist using the static method
const selectedArtist = PerformingArtist.named(performingArtists, "Asake");

// Log the description
console.log(selectedArtist.describe());
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
