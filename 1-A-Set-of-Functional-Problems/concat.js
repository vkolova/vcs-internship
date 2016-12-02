var concat =  function(a, b) {
  if (typeof a === "string" && typeof b == "string") {
    return a + b
  }
  throw new TypeError("Something is wrong with the types.")
}
