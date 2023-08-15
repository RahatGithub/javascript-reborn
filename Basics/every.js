/* every() applies a check function to all the elements of an array and returns true if all elements satisfy the condition  */
/* every() returns true or false */

const arr = [45, 4, 9, 16, 25];
const all_over_18 = arr.every(checkAge);

function checkAge(value, index, array){
    return value >= 18;
}

console.log(all_over_18)
