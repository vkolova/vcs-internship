Array.prototype.first = function() {
  if (this[0] !== undefined)
    return this[0]
  else {
    throw new TypeError("Can't get first element of an empty array.")
  }
}

Array.prototype.range = function(from, to) {
  var result = []
  while (from <= to)
    result.push(from++)
  return result
}

Array.prototype.sum = function() {
  return this.reduce((a, b) => a + b, 0)
}

Array.prototype.average = function() {
  return this.sum() / this.length
}

Number.prototype.times = function(action) {
  var counter = this
  while (counter-- > 0)
    action()
}
