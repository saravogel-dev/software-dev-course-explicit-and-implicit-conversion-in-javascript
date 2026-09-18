/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; // the code seemed fine but I used number() to avoid implicit conversion
console.log("The result is: " + result);

let isValid =("false" === "true"); //isValid needs to be false, but Boolean() of "false" is true which causes a bug or wrong answer.
if (isValid) {
    console.log("This is valid!");
} else { 
    console.log("This is not valid!");
}
    


let age = "25";
let totalAge = Number(age) + 5; // if we don't use number(), the result will be 255. 
console.log("Total Age: " + totalAge);

/* Part 2*/

  /* Implicit Conversion */
  let numberOfApples = null;
  console.log(numberOfApples); // it shows null

  let totalNumberOfApples = 25 + numberOfApples;
  console.log(totalNumberOfApples); // it shows 25


  /* Explicit Conversion */

  let userAge = "twenty";
  console.log(userAge, typeof userAge);
  let newInput = Number(userAge);
  console.log(newInput, typeof newInput); //console.log() shows NaN

