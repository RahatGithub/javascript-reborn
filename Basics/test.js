let cnt = 0

counter = (r) => {
    for(let i=0; i<r; i++){
        console.log(this.Array)
    }
    return cnt 
}

x = counter(5)
console.log(x)