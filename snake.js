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
  console.log("---");

// Nullish coalescing operator,it doesn't work with other operator in conjuction is not seperated by brackets
let height=null;
let width=null;
let area=(height ?? 100)*(width ?? 50);
console.log(area);


// Loops, while loop,for loop
let i=0;
while(i<3){
  console.log(i);
  
  i++;
}

console.log("---");
let j=0;
do{
  console.log(j);
  j++;
}while(j<4)

  console.log("---")

for(let i=0;i<5;i++){
  console.log(`Rendered ${i}th time`);
}

console.log("---")

let ap=1+2;
switch(ap){
  case 1:
    console.log("Too small");
    break;
  case 2:
    console.log("Medium");
    break;
  case 3:
    console.log("Big");
    break;
  default:
    console.log("Too big");
}

// Function , callback function
  
let userName="John";
function showMsg(){
  let msg="Hello "+userName;
  return msg;
}

let v=showMsg();
console.log(v);


const app = (name)=>{
  console.log("Hello "+`${name}`); 
}

var pk=app("Jarvis");

let sum=(a,b)=>a+b;
console.log(sum(4,3));

// String
let str="Jarvis Technology & Strategy Consulting  ";
console.log("length of string is:",str.length);
console.log(str.indexOf('T'));
console.log(str.lastIndexOf('T'));
console.log(str.slice(0,5));

console.log(str.substring(0,5));

console.log(str.replace("Jarvis","harvis"));
console.log(str.trim());


console.log(str.toUpperCase());
console.log(str.toLowerCase());

let str1=",Political Consulting"
console.log(str.charAt(5));
console.log(str.concat(str,str1));

console.log(str.repeat(6));

// Arrays
let arr=[1,2,3,4,5];
arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift(); // pop front
console.log(arr);

arr.unshift(8); // push front
console.log(arr);

arr.sort();
console.log("Sorted Array:",arr);

arr.reverse();
console.log("Reversed Array:",arr);

result=[];
arr.forEach((item)=>{  // for iterating on each element of array
  result.push(item*2);
}
);
console.log("Result Array:",result);

let x=arr.find(num=>num%2===0); // it basically returns numbers if present in array based on condition
console.log(x);

let y=arr.fill(9,0,2);
console.log(y);

let r=arr.findIndex(num=>num==4);
console.log(r);


const pets=['cats','dogs','bird'];
console.log(pets.includes('cats'));

let ans=pets.filter((word)=>word.length>3);
console.log(ans);


let val=arr.map((num)=>num*4);
console.log(val);


const numbers=[3,4,2,6,7];
let value=numbers.reduce((acc,num)=>acc+num,0);
console.log(value);

// | Method   | Returns      | Purpose                            |
// | -------- | ------------ | ---------------------------------- |
// | `filter` | New array    | Keep elements matching a condition |
// | `map`    | New array    | Transform each element             |
// | `reduce` | Single value | Accumulate data into one result    |



let m=new Map();
m.set(1,"rohan");
m.set(2,"jatin");
m.set(3,"saksham");

console.log(m.size);
console.log(m.has(2));
console.log(m.get(2));

m.delete(2);
console.log(m.size);

// iterating over map using keys(),values(),entries()

for( let [key,value] of m){
  console.log(key,value);
}

m.clear();
console.log(m.size);

// set

let s=new Set(['oranges','apples','bananas']);
s.add('Mangoes');

for(let val of s){
  console.log(val);
}
s.delete('oranges');


console.log(s.size);
console.log(s.has('Mangoes'));
s.clear();


// WeakMap is fundamentally different in this aspect. It doesn’t prevent garbage-collection of key objects, object is passed as key
let weakmap=new WeakMap();
let obj={};
weakmap.set(obj,'ok');

// same method like normal set


// Object , we could access using 2 method , either dot method or square bracket

let object = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
};

object['key1'] = 'new value1';
console.log(object['key1']); // Outputs: 'new value1'
console.log(object.key1);

console.log('key1' in object)

for( let key in object){
  if(object.hasOwnProperty(key))
  console.log(key+":"+object[key]);
}


// Error handling
try {
  alert( 'try' );
  if (confirm('Make an error?')) BAD_CODE();
} catch (err) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}

// Promise
let promise = new Promise(function(resolve, reject) {
  resolve("done");

  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});

let promise1 = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promise1.then(
  result => alert(result), // doesn't run
  error => alert(error) // shows "Error: Whoops!" after 1 second
);