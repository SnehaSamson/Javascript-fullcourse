let num = [1,2,3,34,4];

// toString() : It will convert the array into string it will not affect the original array it will return the new array. 
let b = num.toString();
// console.log(b);

// join() : It will join the array with some symbol or value it will not affect the original array it will return the new array.
let c = num.join("_");
// console.log(c);
// console.log(typeof c)

// pop() : It will remove the last element of the array. It will affect the original array and it will return the last deleted value. 

let p = num.pop();
// console.log(p);
// console.log(num);

// push() : It will add the new value to the array in the last place. It will affect the original array and it will return the new array length. 
let push = num.push(55);
// console.log(push);
// console.log(num);

// Shift() : It will remove the first element and it will returns the removed element. 
let r = num.shift();
// console.log(r, num);

// unshift() : Adds element to the beginning of the Array. It will return the new array length. 
let us = num.unshift(111);
// console.log(us, num);

// delete : It is not a method it is a operator which will delete the elements of the array. 
let d = [1,2,3,4,5,6,7,8,9];
let d_more = [11,12,13,14,15,16,17,18,19];
// console.log(d.length);
// delete d[0];
// console.log(d);
// console.log(d.length);

// concat() : It will join the two arrays but it will not affect the original arrays. 

let newArray = d.concat(d_more);
// console.log(newArray);

// sort() : It will sort the array in alphabetical order. It will affect the original array 

let str = ['p','e','a','z','w','x'];
// console.log(str.sort());
// console.log(str);

str.reverse();
// console.log(str);


// Splice() : It can be used add new items to an array.
// first argumente will tell the index position which element need to be deleted
// second argument will tell how many elements need to be deleted.
// remaining argument will add the new elements to the array
// It will return the deleted Element. and also affect the original array 
 

// let num_new = [1,2,3,4,5,6,7];
// let deleted_values = num_new.splice(2,3,111,112,113,114,115);
// console.log(deleted_values);
// console.log(num_new);


// Slice () : It will slice the array into pieces. if only one argument is given it will create a new array from that index till end of an array.
//            If two argument is given then first index will refer to starting index from where the elements need to be selected another argument refers to index-1 till that element need to be selected. 
        //    let sl = num_new.slice(7);
// console.log(num_new.slice(2,4));
// // console.log(sl);
// console.log(num_new);


// map() : It will take the arrao function as an argument and it will return the new array it will take three argument
//         index - index of an array, value - value of an array, array - it will return the whole array 

let arr = [21,22,23,24,25];
let m = arr.map((value,index,arr)=>{
// console.log(value," * ",index," * ",arr);
return value + index;
})

// console.log(m);


// filter () : filter method will filter the array based on the condition if the condition is true it will store the value in the new array and the new values will be created as a new array.


let arr2 = [45,23,21,0,3,5];
let filter = arr2.filter((value) => {
    return value<10;
})

// console.log(filter);

// reduce() : It will give the one value after doing some operation on array it will take on extra variable to store the result in that variable.


let arr3 = [1,2,3,4,5,2,1];
let red = arr3.reduce((value,acc) =>{
    return value+acc;
})
console.log(red);