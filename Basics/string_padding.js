/* String Padding is used when we need to make a string of certain length, 
for which we need to add some padding (additional characters) */


let str = "RAC";

// Start padding (parameters : total length, padding character)
let str_pad1 = str.padStart(10,"*"); // str_pad1 = "*******RAC"


// End padding (parameters : total length, padding character)
let str_pad2 = str.padStart(10,"*"); // str_pad2 = "RAC*******"