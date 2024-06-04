// Q1 - Create an array of numbers and take input from the user to add numbers to this array 
// let arr = [1,2,3,4,5,6,7];
// let a = prompt("Enter the number");
// a=Number.parseInt(a);
// arr.push(a);
// console.log(arr);

// Q2 : Keep adding numbers to the array in until 0 is added to the array. 

// let arr = [1,2,3,4,5,6,7];
// do{
//     let a = prompt("Enter the number");
//     a=Number.parseInt(a);
//     arr.push(a);
//     console.log(arr);
// }while(a!=0);


// Q3 : Filter for numbers divisible by 10 from a given Array. 

let arr = [10,21,20,32,45,80,90];
let fil = arr.filter((value) => {
    return value%10 == 0;
})

// console.log(fil);

// Q4 : Create an array of square of given numbers 

let newarr = [2,3,4,5,6,7];
let sq = newarr.map((value) => {
    return value*value;
})

// console.log(sq);


// Q5 : Use reduce to calculate factorial of a given number from an array of first n natural numbers 

let arr2 = [1,2,3,4];
let fact = arr2.reduce((val,acc) => {
    return val*acc;
})
console.log(fact);