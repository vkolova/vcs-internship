var charsHistogram = function(str) {
  var result = {}
  str = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase().split("")

  str.forEach(function(c) {
    if (!(result.hasOwnProperty(c)))
      result[c] = 1
    else
    result[c] += 1
  })

  return result

}


var str = "Count the characters in this very profound sentence";
console.log(charsHistogram(str));
