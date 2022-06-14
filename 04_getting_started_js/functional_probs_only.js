var only = function(type, arr) {
  return arr.every(e => typeof e === type)
};

const arr = [1,2,3,4];
console.log(`[${arr}] contains only strings:`, only("string", arr)); // false
console.log(`[${arr}] contains only numbers:`, only("number", arr)); // true
