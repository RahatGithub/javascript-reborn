/* every() checks if all values of an array pass a test  */
/* some() checks if some values of an array pass a test  */
/* both functions return true or false */

const arr = [45, 4, 9, 16, 25];
const all_over_18 = arr.every(checkAge);
const some_over_18 = arr.some(checkAge)

function checkAge(value, index, array){
    return value >= 18;
}

console.log(all_over_18);  // false
console.log(some_over_18); // true