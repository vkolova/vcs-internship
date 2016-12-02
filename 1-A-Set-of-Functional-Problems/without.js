var without = function(exclude, arr) {
  exclude.forEach(function(el) {
    if (arr.indexOf(el) > -1) {
      arr.splice(arr.indexOf(el), 1)
    }
  })
  return arr
}
console.log(without([5,6], [1,2,3,4,5,6])) // [1,2,3,4]
