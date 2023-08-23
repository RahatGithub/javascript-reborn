/* 'use strict' keyword is used to activate the strict mode in JS.
When this keyword is used, only the codes that are below will use that strict mode. Not those which are above that statement. */

// Example 1:
"use strict"; // everything below this will follow the strict mode
myFunction();

function myFunction() {
  y = 3.14;   // This will cause an error because y is not declared
}


// Example 2: 
x = 15; // this will not cause any error 

myFunction();

function myFunction(){
    "use strict";
    y = 3.14 // this will cause an error
}