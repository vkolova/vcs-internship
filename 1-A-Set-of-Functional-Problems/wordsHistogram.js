var wordsHistogram = function(str) {
  var result = {}
  str = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().split(" ")

  str.forEach(function(word) {
    if (!(result.hasOwnProperty(word)))
      result[word] = 1
    else 
    result[word] += 1
  })

  return result
}


var str = "A function, is a function with a very functional function!"
console.log(wordsHistogram(str))
