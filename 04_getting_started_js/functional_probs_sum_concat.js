function sum(a, b){
  if ((typeof a === "number") && (typeof b === "number"))
    return a + b;
  else
    throw new TypeError("Both arguments must be numbers!");
}

function concat(a, b){
  if ((typeof a === "string") && (typeof b === "string"))
    return a + b;
  else {
    throw new TypeError("Both arguments must be strings!")
  }
}

console.log("sum(1,2) =", sum(1, 2))
console.log("concat(\"one\", \"two\") =", concat("one", "two"))
//will throw a TypeError
console.log(sum("one", 2))
console.log(concat("one", 2))
