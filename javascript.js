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

/*
Types of numbers:
Integers - are floating point numbers without a fraction. they can either be positive or negative
Floating points - numbers than have a decimal points and decimal places
Doubles - are more accurate floating point numbers, they have greater precision ( more accurate to a greater number of decimal places)
*/

/*
We even have different types of number systems! Decimal is base 10 (meaning it uses 0–9 in each column), but we also have things like:

Binary — The lowest level language of computers; 0s and 1s.
Octal — Base 8, uses 0–7 in each column.
Hexadecimal — Base 16, uses 0–9 and then a–f in each column
*/

/*
lert('1' + 2 + 2); // "122" and not "14"

Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated 
to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".
*/

//you can convert strings into numbers by adding by prefixing it with a '+'. It has the same effect as using the function Number(...)
//If you put a '+' infront of a negative number, it will NOT turn it positive. it has no effect

// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0



//If we want to treat them as numbers, we need to convert and then sum them:

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5

//---------------------------------------------------------------

/*
Javascript variables are not bound to data types. You can create a variable as a string, but then store a anumber
Example:
let message = "hello";
message = 123456;
*/

/*
NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:

alert( "not a number" / 2 ); // NaN, such division is erroneous
*/

/*
In javascrip, a number cannot represent a value larger than (253-1) [9007199254740991] or less than -(253-1) [-9007199254740991]
This is a techincal limitation, BUT there may be cases where we need such large numbers. In this case, Javascript has
something called 'BigInt'. It is an integer with an 'n' appended to the end of it.
*/

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

/*
In JavaScript, there are 3 types of quotes.

    Double quotes: "Hello".
    Single quotes: 'Hello'.
    Backticks: `Hello`.

Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}
 for example:
 */

name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

//In JavaScript, null simply means that a value represents "nothing", "empty", or "value unknown"
let age = null; //state that the age is unknown
alert(age); // shows "undefined"

/*
The 'object' type is special. All the other types are primative b/c they can only hold a single thing. Objects can hold
a collection of data.
*/

//The typeof operator returns the type of the argument

typeof undefined //returns "undefined"

typeof 0 //returns "number"

typeof 10n //returns "bigint"

typeof true //returns "boolean"

typeof "foo" //returns "string"

typeof Symbol("id") //returns "symbol"

typeof Math //returns "object"  (1)

typeof null //returns "object"  (2)

typeof alert //returns "function"  (3)

/*
The last three lines may need additional explanation:

    1) Math is a built-in object that provides mathematical operations.
    2) The result of typeof null is "object". That’s an officially recognized error in typeof, coming 
    from very early days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a 
    special value with a separate type of its own. The behavior of typeof is wrong here.
    3)The result of typeof alert is "function", because alert is a function. Functions belong to the object type. 
    But typeof treats them differently, returning "function". That also comes from the early days of JavaScript. Technically, 
    such behavior isn’t correct, but can be convenient in practice.
*/

/*
THERE ARE 8 BASIC DATA TYPES IN JAVA:
number: numbers of any kind
bigint: arbitrary numbers
string: for strings
boolean: for true/false
symbol: for unique identifiers
object: for more complex data structures
null: for unknown values
undefined: for undefined values
*/

/*
slice(start, end)
substring(start, end)
substr(start, length)

Note:
JavaScript counts positions from zero.

First position is 0.

Second position is 1.
*/
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13); //returns Banana
let str = "Apple, Banana, Kiwi";
let part = str.slice(-12, -6);//returns Banana
let part = str.slice(7); //returns Banana, Kiwi
let part = str.slice(-12);//returns Banana, Kiwi

let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);//returns Banana

let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6); //returns Banana
let str = "Apple, Banana, Kiwi";
let part = str.substr(7);//returns Banana, Kiwi
let str = "Apple, Banana, Kiwi";
let part = str.substr(-4);//returns Kiwi

/*
The replace() method does not change the string it is called on.

The replace() method returns a new string.

The replace() method replaces only the first match
*/
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

/*
To replace all matches, use a regular expression with a /g flag (global match):
*/
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools"); //returns 'Please visit W3Schools and W3Schools!'

/*
By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work

To replace case insensitive, use a regular expression with an /i flag (insensitive):
*/
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools"); //returns Please visit W3Schools

/*
Self explanatory: toUpperCase(): and toLowerCase()
*/

//concat() joins 2 strings or more strings together. This can be used instead of the '+' operator if you want
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2); //returns 'Hello World'

//The trim() method removes whitespace from both sides of a string:
let text1 = "      Hello World!      ";
let text2 = text1.trim();//returns 'Hello World!'

//The padStart() method pads a string with another string
let text = "5";
let padded = text.padStart(4,"x");//returns 'xxx5'

/*The padStart() and padEnd() method is a string method.

To pad a number, convert the number to a string first.

See the example below.
*/

let numb = 5;
let text = numb.toString();
let padded = text.padStart(4,"0");//returns 0005

let numb = 5;
let text = numb.toString();
let padded = text.padEnd(4,"0");//returns 5000

//The padEnd() method pads a string with another string:
let text = "5";
let padded = text.padEnd(4,"x");//return 5xxx

let text = "5";
let padded = text.padEnd(4,"0");//returns 5000

/*
There are 3 methods for extracting string characters:

    charAt(position)
    charCodeAt(position)
    Property access [ ]
*/

//The charAt() method returns the character at a specified index (position) in a string:
let text = 'HELLO WORLD';
let char = text.charAt(0);//returns 'H'

/*
The charCodeAt() method returns the unicode of the character at a specified index in a string:

The method returns a UTF-16 code (an integer between 0 and 65535).
*/
let text = "HELLO WORLD";
let char = text.charCodeAt(0);//returns '72'

/*
ECMAScript 5 (2009) allows property access [ ] on strings:
Example */
let text = "HELLO WORLD";
let char = text[0];//returns 'H'
/*
Property access might be a little unpredictable:

    It makes strings look like arrays (but they are not)
    If no character is found, [ ] returns undefined, while charAt() returns an empty string.
    It is read only. str[0] = "A" gives no error (but does not work!)

    let text = "HELLO WORLD";
    text[0] = "A";    // Gives no error, but does not work
*/


//A string can be converted to an array with the split() method:
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe

//All string methods return a new value. They do NOT change the original variable

