/* eslint-disable linebreak-style */

/**

 * Adds two numbers together

 * @param {int} num1 First number
 * @param {int} num2 Second number
 * @return {int} The sum of the two numbers.

 */
function sum(num1, num2) {
  if (typeof(num1) === 'number' && typeof(num2) === 'number') {
    return num1 + num2;
  }
  throw new TypeError('Something is wrong with the types.');
}

/**
   * Adds two strings together
   * @param {string} text1 First text
   * @param {string} text2 Second text
   * @return {string} The concatenation of two strings.
   */
function concat(text1, text2) {
  if (typeof(text1) === 'string' && typeof(text2) === 'string') {
    return text1 + text2;
  }
  throw new TypeError('Something is wrong with the types.');
}

console.log(sum(3, 4));
console.log(concat('Hello ', 'World!'));
