var sum = function (a, b) {
  if (typeof a === "number" && typeof b ==="number") {
    return a + b
  }
  throw new TypeError("Something is wrong with the types.")
}
