const pluck = function(property, arr) {
  return arr.map(function(item) {
    return item[property];
  });
};
const students = [{
  'name': 'Daniel Taskoff',
  'course': 'Frontend JavaScript',
}, {
  'name': 'Elena Jeleva',
  'course': 'Programming 101',
}, {
  'name': 'Luboslava Dimitrova',
  'course': 'Frontend JavaScript',
}, {
  'name': 'Anton Antonov',
  'course': 'Core Java',
}, {
  'name': 'Nikola Dichev',
  'course': 'Core Java',
}];

console.log(pluck('name', students));
