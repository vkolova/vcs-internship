var without = function(exclude, arr) {
  return arr.filter(function(a) {
    return exclude.indexOf(a) === -1
  })
}
console.log(without([5,6], [1,2,3,4,5,6])) // [1,2,3,4]
