const find = function(predicateCallback, arr) {
  if (typeof predicateCallback !== 'function') {
    return undefined;
  }
  const elementThatMatchTheGivenPredicate = arr.find((element) =>
    predicateCallback(element));
  return elementThatMatchTheGivenPredicate === undefined ? undefined :
  elementThatMatchTheGivenPredicate;
};

// Check if element is not undefined && not null
isNotNullNorUndefined = (o) => (typeof (o) !== 'undefined' && o !== null);


const arr1 = [1, 2, 3];
console.log(find(isNotNullNorUndefined, arr1));

const arr2 = [];
console.log(find(isNotNullNorUndefined, arr2));
