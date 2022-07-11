/* eslint-disable linebreak-style */

const contains = function(element, arr) {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (element === el) {
      return true;
    };
  };
  return false;
};

console.log(contains(1, [3, 2, 1]));
console.log(contains(4, [3, 2, 1]));
