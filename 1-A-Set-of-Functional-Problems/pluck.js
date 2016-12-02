var pluck = function(property, arr) {
  var result = []

  arr.forEach(function(element) {
    result.push(element[property])
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
// }];
//
// console.log(pluck("name", students))

exports.pluck = pluck
