
var only = function(type, arr) {
  return arr.every(function(element) {
    return typeof element === type
  })
}

console.log(only("string", [1,2,3,4]))
