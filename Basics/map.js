/* map() is also a callback function */
/* arr.map(func) applies the function 'func' to all elements of the array 'arr' */
/* unlike forEach(), map() doesn't modify the array, it creates a new array containing the result after the 'func' operation */

const arr = [45, 4, 9, 16, 25];
const dbl_arr = arr.map(doubleIt);

function doubleIt(value, index, array) {
  return value * 2;
}

console.log("array: ",arr)
console.log("doubled array: ",dbl_arr)