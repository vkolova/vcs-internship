var find = function(predicate, arr) {
  return arr.find(predicate);
};

p = function(x){
  return x > 3;
}

const arr1 = [0,10,12];
const arr2 = [1,2,3];
console.log(`First element > 3 in [${arr1}]: `, find(p, arr1));
console.log(`First element > 3 in [${arr2}]: `, find(p, arr2));
