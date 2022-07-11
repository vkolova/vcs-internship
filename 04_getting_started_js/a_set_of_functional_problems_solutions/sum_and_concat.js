/* eslint-disable linebreak-style */
const sum = function(a, b) {
  return (typeof (a) === 'number' && typeof (b) === 'number') ?
    a + b : new TypeError('Something is wrong with the types.');
};

console.log(sum(1, 2));

const concat = function(a, b) {
  return (typeof (a) === 'string' && typeof (b) === 'string') ?
    a + b : new TypeError('Something is wrong with the types.');
};

console.log(concat('a', 'b'));
