// Variables 
// Data types - Number,Bigint,String,Boolean,Null,Undefined,Object
let a=5;
let b=89;
console.log(a+b);
// let a=15;  // let can't be redeclared

let name="Jarvis";
console.log("Hello "+name);

name="Nova";
console.log("Hi "+name);

var c=10;  // var can't be redeclared
console.log(c);
c=15;
console.log(c);

const p=10;
console.log(p);

const bigint=12345678945678n;
console.log(bigint);


// Prompt,Confirm , but they are not defined in nodejs but works fine in browser

// let age=prompt("How old are you?",18);
// alert(`Your are ${age} years old`); 

// let isBoss=confirm("Are you the boss");
// alert(isBoss);




// Typeconversion rules 

// "hello" + 42        // "hello42" (number converts to string)
// "hello" + true      // "hellotrue" (boolean converts to string)
// "hello" + [1,2,3]   // "hello1,2,3" (array converts to string)
// "hello" + {a: 1}    // "hello[object Object]" (object converts to string)
// "hello" + null      // "hellonull" (null converts to string)
// "hello" + undefined // "helloundefined" (undefined converts to string)

// 5 - "2"     // 3 (string converts to number)
// 5 * "2"     // 10 (string converts to number)
// 5 / "2"     // 2.5 (string converts to number)
// 5 - true    // 4 (true converts to 1)
// 5 - [2]     // 3 (array converts to number if possible)
// 5 - {}      // NaN (object converts to NaN)

// 5 > "3"     // true (string converts to number)
// "10" > "3"  // false (string comparison, not numeric)
// [10] > [2]  // true (arrays convert to strings, then to numbers)
// null == 0   // false (special case)
// null >= 0   // true (null converts to 0)
// undefined == null  // true (special case)


let age=10;
if(age<18){
    console.log("You are minor");
}
else console.log("You can have driving license");


// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('Please enter your age: ', (age) => {
//     const ageNum = Number(age); // Convert the input to a number
  
//     if (isNaN(ageNum)) {
//       console.log('Invalid input. Please enter a valid number for age.');
//     } else if (ageNum < 18) {
//       console.log('You are a minor.');
//     } else {
//       console.log('You are not a minor.');
//     }
  
//     readline.close();
//   });


  let z=5;
  let q=8;
  let answer=z**q;
  console.log(answer);


// Nullish coalescing operator,it doesn't work with other operator in conjuction is not seperated by brackets
let height=5;
let width=6;
let area=(height ?? 100)*(width ?? 50);
console.log(area);
  