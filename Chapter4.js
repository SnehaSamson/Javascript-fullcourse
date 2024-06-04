// Q1 
// console.log("har\"".length);
// console.log("har\"");

// Q2 
let str = "Santhosh";
// console.log(str.includes('th'));
// console.log(str.startsWith('s'));
// console.log(str.endsWith('s'));
// console.log(str.endsWith('h'));

// Q3 
// console.log(str.toLowerCase());

// Q4 Extract the amount out of the string "Please give Rs 1000";

let string = "Please give Rs 1000"
let amount = string.slice("Please give Rs ".length);
// console.log(typeof amount);
// amount = Number.parseInt(amount);
// console.log(amount);
// console.log(typeof amount);

// Q5 - Try to change the fourth character of the given string were you able to do it 

let str2 = "Santhosh";
let newstr = str2.replace(str2[4],'X');
// console.log(newstr);
console.log(str2.replace(str2[4],'X'));// We can replace the character but we cannot change the existing String

console.log(str2);// Hence the original string remains the same we cannot change the string as it is immutable.

