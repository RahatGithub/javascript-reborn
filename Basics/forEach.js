/* forEach() is a callback function that calls another function  */
/* the function passed as argument of forEach is applied once to each element of the array */
/* it is used as: arr.forEach(func) */
/* forEach() itself takes the 3 arguments- value, index, array */

//EXAMPLE 1
function sayColor(fruit){
    let color;
    if (fruit=="banana"){
        color = "yellow";
    }
    else if(fruit=="apple"){
         color = "red";
    }
    else if(fruit=="guava"){
        color = "green";
    }
    console.log(`${fruit} is ${color}`)
}

let fruits = ["banana", "apple", "guava"];
fruits.forEach(sayColor); // this will apply the function 'sayColor' to all the elements of 'fruits'

//EXAMPLE 2 
let arr = [12, 15, 45, 67, 89];

arr.forEach(myFunc);

function myFunc(value, index, array){
    console.log(value, index, array)
}
/* The output will be-
    12 0 [12, 15, 45, 67, 89]
    15 1 [12, 15, 45, 67, 89]
    45 2 [12, 15, 45, 67, 89]
    67 3 [12, 15, 45, 67, 89]
    89 4 [12, 15, 45, 67, 89]
*/