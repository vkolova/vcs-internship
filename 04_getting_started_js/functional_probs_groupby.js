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
}];


var groupBy = function(groupingFunction, arr) {
  var group_arr = {};
  arr.forEach(function(element){
    const currentKey = groupingFunction(element).toString();
    if (!group_arr.hasOwnProperty(currentKey)){
      group_arr[currentKey] = [element];
    } else {
      group_arr[currentKey].push(element);
    }
  });

  return group_arr;
};


console.log(groupBy(function(student) {
  return student.course;
}, students));
