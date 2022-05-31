let message;

message = 'Hello'; //stores the string 'Hello' in a variable named message

alert(message); //shows the variable's content with and alert pop up

//can also combine into a single line
let message2 = 'Hello';

alert(message2);

//can delcare multiple vars in a single line, but that is not recommended. Just declare everything on a seperate line
let user = 'John'
let age = 25 
let message3 = 'Hello';

//this is also correct
let user1 = 'John',
    age1 = 25, 
    message4 ='Hello';

//as well as this
let user2 = 'John'
    , age2 = 25
    , message5 = 'Hello';

//we can change the value of a variable, but once we do, the old value is replaced
let replace;
replace = "Hello";
replace = "World"; //value changed

//can declare multiple variable and copy data from one into the other
let hello = "Hello World!"

let replaced;

replaced = hello; // replaced now equals 'Hello World'
//now 2 variables hold the same data
alert(hello);
alert(replaced);

/* 
When you name a variable, it can only contain letters, digits or symbols '_' and '$'.
You also must not start the variable name with a number*/

/* 
camelCase is a common method to name variables that have multiple words in them.
Examples:
myVeryLongVariableName
firstName
numberOfElephants */


// The _ and $ can be used as variable names. These are valid varibles:
let _ = 4;
let $ = 3;
alert(_ + $); //7

//hyphen '-' are NOT allowed in variable names. something like my-name as a variable would be invalid

//Variable are case sensitive. apple and APPLE are different variables

/* There are certain words you cannot use to name variables b/c they are used by the language itself,
such as: let, class, return, and function 

These declarations will not work:
let let = 5;
let return = 5;
*/

// To delcare constant (unchanging variables), use 'const' instead of let
const myBirthday ='06.10.1998';

/*
constants CANNOT be reassigned

myBirthday = '10.06.1998'; 

This would cause an error message since it was already defined as a constant */

/*Uppercase constants are used as alias for difficult to remember values, but are are known prior to execution.
For instance, colors in their hexadecimal format */
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

//As we can see, creating COLOR_ORANGE is much easier than remembering "#FF7F00"

//Uppercase constants are only used for hard-coded values. 


/* 
When thinking of names for variables, some good-to-follow rules are:

>Use human-readable names like userName or shoppingCart.
>Stay away from abbreviations or short names like a, b, c, unless you really know what you’re doing.
>Make names maximally descriptive and concise. Examples of bad names are data and value. Such names say nothing. 
    It’s only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
>Agree on terms within your team and in your own mind. If a site visitor is called a “user” then we should name 
    related variables currentUser or newUser instead of currentVisitor or newManInTown. */

let admin , name;
name = 'John';
admin = name;
alert(admin); //output is 'John'

let ourPlanetName = 'Earth';
let currentUserName = 'John';

const BIRTHDAY = '06.10.1998';
let age3 = 23;


/* 
x ** y produces the same result as Math.pow(x,y)

let x = 5;
let z = x ** 2;

and 

let x = 5;
let z = Math.pow(x,2);

 are the same, they both have the result of 25
 */

//arithmetic expressions follow the order of operations

//java numbers are always 64-digit floating points

//you dont need to define different types of numbers with javascript like int, float, short, long, floating point, etc.

//javascript numbers ALWAYS stored as double precision floating point numbers. This format stores numbers in 64 bits

/*integers are accurate up to 15 digits
Example: 
let f = 999999999999999; the value of f is 999999999999999
let c = 9999999999999999; the value of c is 10000000000000000
*/

/*
JavaScript will try to convert strings to numbers in all numeric operations, EXECPT when + is used. Javascript will instead
concatenate

This will work:
let x = "100";
let y = "10";
let z = x / y; result will be 10

This will also work:
let x = "100";
let y = "10";
let z = x * y; result will be 1000

And this will work:
let x = "100";
let y = "10";
let z = x - y; result will be 90

But this will NOT work:
let x = "100";
let y = "10";
let z = x + y; result will be 10010
*/


//NaN-Not a Number. Trying to do artithmetic with a non-numeric string will result in NaN.

/*
let x = 100/"Apple"; will result in NaN

on the other hand

let x = 100/"10"; will result in a number since the string is numerical
*/

//You can use isNaN(); to figure out if a value is not a number

/*
If you use NaN in a mathematical operation, the result will also be NaN:

let x = NaN;
let y = 5;
let z = x + y; the result will be NaN

Or the result will be a concatenation if you use +

let x = NaN;
let y = "5";
let z = x + y; result will be NaN5
*/

//NaN is a number: typeof NaN returns 'number'
typeof NaN; //returns 'number'

//Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
}

//Dividing by zero also generates infinity
let x =  2 / 0; //generates infinity
let y = -2 / 0; //generates infinity

//Infinity is a number: typeof Infinity return 'number'
typeof Infinity; //returns 'number'

/*
Hexadecimal
JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.

Example:
let x = 0xFF; //this will be interpreted as a hexadecimal and return the value 225 in this case
*/

/*
By default, Javascrip displays numbers as base 10 decimals,
But you can use the toString() method to output numbers from base 2 to base 36:

Hexadecimal is base 16

Decimal is base 10

Octal is base 8

Binasry is base 2
*/

/*
Normally Javascript numbers are primitive values, created from literals:
let x = 123;

But numbers can also be defined as objects with the keyword 'new':
let y = new Number(123);

Do NOT create number objects, complicates and slow down the codes execution speed
*/

/* 
== operator mean is it equal. === operator mean it is NOT equal

let x = 500;
let y = new Number(500); x == y returns true

let x = 500;
let y = new Number(500); x === y returns false
-----------------------------------------------------
(x == y) true or false?

let x = new Number(500);
let y = new Number(500);

it is FALSE
-----------------------------------------------------
(x === y) true or false?

let x = new Number(500);
let y = new Number(500);

it is FALSE
-----------------------------------------------------
Comparing two onjects is ALWAYS false

*/

