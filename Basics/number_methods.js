let num, res;

/* Converting a number to string */
num = 2537;
res = num.toString(); // now res = "2537"


/* To fix the number of decimals after point */
num = Math.PI;
res = num.toFixed(4); // res = "3.1416" 
// toFixed() converts the number to a string


/* To fix total number of decimals */
num = Math.PI;
res = num.toPrecision(4); // res = "3.142"


/* To convert to Number */
num = "25.6987";
res = Number(num);