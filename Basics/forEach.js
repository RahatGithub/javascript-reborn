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