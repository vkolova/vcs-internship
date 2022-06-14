var without = function(exclude, arr) {
  result = arr.filter(function(el){
    return !exclude.includes(el);
  });
  return result;
}

console.log("[1,2,3,4,5,6] without [5,6] is ", without([5,6], [1,2,3,4,5,6])); // [1,2,3,4]
