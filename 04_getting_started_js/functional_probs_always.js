var always = function(value) {
  return function(){
    return value;
  };
};

var f = always(5);
console.log(f()); // 5
