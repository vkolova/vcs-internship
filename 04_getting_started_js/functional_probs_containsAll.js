var containsAll = function(elements, arr){
  return elements.every( e => arr.includes(e) );
}

console.log("[1, 4] in [1,2,3]: ", containsAll([1, 4], [1, 2, 3]))
console.log("[1, 3] in [1,2,3]: ", containsAll([1, 3], [1, 2, 3]))
