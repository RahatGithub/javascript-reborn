/* reduce() reduces the array and produces one value as result */
/* reduce() doesn't modify the main array  */

const arr = [34, 45, 22, 31, 76];

const res = arr.reduce(findTotal);

// reduce() takes 4 arguments: accumulator, value, index, array
function findTotal(total, value, index, array){
    return total + value;
}

console.log(res); //res = 208