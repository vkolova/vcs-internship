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


var countBy = function(countingFunction, arr) {
  var count_arr = {};
  arr.forEach(function(element){
    const counted_el = countingFunction(element);
    if (counted_el in count_arr){
      count_arr[counted_el] += 1;
    } else{
      count_arr[counted_el] = 1;
    }
  });

  return count_arr;
};


console.log(countBy(function(student) {
  return student.course;
}, students));
