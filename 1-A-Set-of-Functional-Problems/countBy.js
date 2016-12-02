var groupBy = require('./groupBy').groupBy

var countBy = function(countingFunction, arr) {
  var grouped = groupBy(countingFunction, arr)

  Object.keys(grouped).forEach(function(element) {
    result[element] = res[element].length
  })

  return result
}

var students = [{
  "name" : "Daniel Taskoff",
  "course" : "Frontend JavaScript"
}, {
  "name" : "Elena Jeleva",
  "course" : "Programming 101"
}, {
  "name" : "Luboslava Dimitrova",
  "course" : "Frontend JavaScript"
}, {
  "name" : "Anton Antonov",
  "course" : "Core Java"
}, {
  "name" : "Nikola Dichev",
  "course" : "Core Java"
}]


console.log(countBy(function(student) {
  return student.course
}, students))
