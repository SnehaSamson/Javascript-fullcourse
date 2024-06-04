let num = [3,54,1,2,4];

// for(let i=0;i<num.length;i++)
//     {
//         console.log(num[i]);
//     }

// ForEach Loop : It will take the array function as argument.

num.forEach((element) => {
    // console.log(element);
    // console.log(element * element);
})

// Array.from() : It is used to create an array form any other object 

let name = "Sneha Samson Mullur";
let arr = Array.from(name);
console.log(arr);

// for...of : It will access the values of an array
for(let i of num)
    {
        console.log(i)
    }

// for...in : It will access the index of an array
for(let i in num)
    {
        console.log(i);
    }