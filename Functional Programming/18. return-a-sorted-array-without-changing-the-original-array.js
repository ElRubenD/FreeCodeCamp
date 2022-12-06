const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
const newArr = [].concat(arr);
return newArr.sort(compareFunction)

  // Only change code above this line
}

nonMutatingSort(globalArray);

function compareFunction(a, b){
  return a - b;
}