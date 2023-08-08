//***Understanding mutable and immutable objects */

//objects that are declared with 'let' are mutable
let programmers = ["Tanjim", "Tanjil", "Lukman"]
let developers = ["Dip", "Bustan", "Rahat"] 

programmers.push("Mustafiz")

//mutation happened 
developers = programmers

//changing any one of them will affect the other 
//pushing "Tufael" to "developers" means to add "Tufael" to "programmers" also and vise versa 
developers.push("Tufael")  
programmers.push("Shovon")

//check that, both are showing equal result now.. because mutation occured between the two 
console.log(programmers)
console.log(developers)