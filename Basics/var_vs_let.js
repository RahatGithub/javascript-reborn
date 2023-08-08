/* 'var' is function-scoped but 'let' is block-scoped */


// variables declared with 'var' can be re-declared inside the same function
function example1() {
    var x = 10;
    if (true) {
      var x = 20; // Re-declares the same variable
    }
    console.log(x); // Outputs 20
}


// if variable declared with 'var' are tried to access before its assignment then it'll use 'undefined' 
function example2(){
    console.log(name); // it'll print "undefined"
    var name = "Joseph"; 
}


// if variable declared with 'let' are tried to access before its assignment then it'll throw an error
function example3(){
    console.log(name); // it'll throw an error
    let name = "Jonathon";
}