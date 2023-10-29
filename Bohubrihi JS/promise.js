let prom = new Promise((resolve, reject) => {
    let num = 150;

    if(num>10){
        resolve("Allowed");
    }
    else{
        reject("Restricted");
    }
})

prom.then((message) => {
    console.log(message+" from then");
}).catch((message) => {
    console.log(message+" from catch");
})