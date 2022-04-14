const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  return nums.every((number) => number >= 2)
};

const isEveryWordShorterThan7 = () => {
  return words.every((word) => word.length < 7)
};

// Filter

const arrayLessThan5 = () => {
  return nums.filter((arrEl) => arrEl < 5)
};

const arrayOddLengthWords = () => {
  //
};

// Find

const firstValDivisibleBy4 = () => {
  //
};

const firstWordLongerThan4Char = () => {
  //
};

// For Each

const logValuesTimes3 = () => {
  //
};

const logWordsWithExclamation = () => {
  //
};

// Map

const arrayValuesTimes100TimesIndex = () => {
  //
};

const arrayWordsUpcased = () => {
  //
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  //
};

const doSomeWordsHaveAnA = () => {
  //
};

module.exports = {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesTimes100TimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
