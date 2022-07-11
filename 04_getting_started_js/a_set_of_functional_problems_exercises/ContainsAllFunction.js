/* eslint-disable linebreak-style */

const containsAll = function(elements, arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    for (let j = 0; j < elements.length; j++) {
      if (elements[j] === el) {
        count++;
      };
    };
  }
  return (count === elements.length ?
     true : false);
};

console.log(containsAll([1, 2], [3, 2, 1]));
console.log(containsAll([1, 5], [3, 2, 1]));
