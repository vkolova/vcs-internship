var find = function(predicate, arr) {
  var found = false

  arr.some(function(x) {
    if (predicate(x)) {
      found = x
      return true
    }
  })

  return found || undefined
}

var array = [15, 13, 48, 12, 5, 70]

console.log(find(function(element) {
  return element > 2
}, array))
