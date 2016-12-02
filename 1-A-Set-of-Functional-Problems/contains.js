var contains = function(element, arr) {
  if (arr.length === 0) {
    return false
  }

  if (arr.indexOf(element) === -1) {
    return false
  } else {
    return true
  }
}

console.log(contains(24, [2, 15, 17, 25, 24, 20, 132, 456]))


var containsAll = function(elements, arr) {
  return elements.every(function(a) {
    return contains(a, arr)
  })

}

console.log(containsAll([5, 3, 127], [15,  3, 17, 5]))
