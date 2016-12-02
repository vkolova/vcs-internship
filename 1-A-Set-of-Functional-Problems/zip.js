var zip = function() {
  var result = []
  var obj = arguments
  Object.keys(obj).forEach(function(arg) {
    obj[arg].forEach(function(element, index) {
      if(!(result[index])) {
        result[index] = []
      }
      result[index].push(element)
    })
  })
  return result
}

console.log(zip([1, 2, 3], [4, 5, 6]));
// [ [1, 4], [2, 5], [3, 6] ]
