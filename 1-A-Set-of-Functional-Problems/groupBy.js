var groupBy = function(groupingFunction, arr) {
  var result = {}

  arr.forEach(function(element) {
    if (result.hasOwnProperty(groupingFunction(element))) {
      result[groupingFunction(element)].push(element)
    } else {
      result[groupingFunction(element)] = []
      result[groupingFunction(element)].push(element)
    }
  })

  return result
}

// var students = [{
//   "name" : "Daniel Taskoff",
//   "course" : "Frontend JavaScript"
// }, {
//   "name" : "Elena Jeleva",
//   "course" : "Programming 101"
// }, {
//   "name" : "Luboslava Dimitrova",
//   "course" : "Frontend JavaScript"
// }, {
//   "name" : "Anton Antonov",
//   "course" : "Core Java"
// }, {
//   "name" : "Nikola Dichev",
//   "course" : "Core Java"
// }]
//
//
// console.log(groupBy(function(student) {
//   return student.course
// }, students))


exports.groupBy = groupBy
