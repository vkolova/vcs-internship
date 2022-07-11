/* eslint-disable linebreak-style */

const sum = (num1, num2) =>{
  if (typeof(num1) === 'number' && typeof(num2) === 'number') {
    return num1 + num2;
  }
  throw new TypeError('Something is wrong with the types.');
};


const concat = (text1, text2) =>{
  if (typeof(text1) === 'string' && typeof(text2) === 'string') {
    return text1 + text2;
  }
  throw new TypeError('Something is wrong with the types.');
};

console.log(sum(3, 4));
console.log(concat('Hello ', 'World!'));
