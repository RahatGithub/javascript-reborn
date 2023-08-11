let str, s1, s2;

str = "I am RAC";

/* Usually both returns the same value */
s1 = str[5];         // s1 = "R"
s2 = str.charAt(5);  // s2 = "R"

/* But, when the index is out of range then they are different. e.g- */
s1 = str[15];        // s1 = undefined
s2 = str.charAt(15); // s2 = "" 

/* By any chance, if the index is out of range and if we use charAt()
then we can use str.length() anytime and it will not throw an error, 
it will return 0 instead. Because it returns an empty string. 
But if we directly access using str[] then it will return undefined. */



/* charCodeAt() is used to find the unicode of a character in a string */

// to find the unicode of the character in 5th position, which is "R"
uni = str.charCodeAt(5) // uni = 82 