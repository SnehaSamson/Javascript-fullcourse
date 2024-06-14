console.log("Hello");

// console Objects 

console.log(console);
console.error("This is error");
console.assert(5>53);
console.assert(553>5);

let obj = {
    name:"Sneha",
    age:29,
    id:222
}

console.table(obj);
console.warn("This is warning");
console.info("This is info");

console.time("Time of for loop");
for(let i=0;i<10;i++){
    console.log("Loop");
    }
console.timeEnd("Time of for loop");

console.time("Time for while loop");
let j=0
while(j<10)
    {
        console.log("loop");
        j++;
    }
console.timeEnd("Time for while loop");


// Alert prompt confirm 

alert("Hello your scripts works.")
let a = prompt("Please enter the value of a ");
a = Number.parseInt(a);
console.log(`The value of a is ${a}`);
alert("you enetered a of type "+(typeof a));

let write = confirm("Do you want to write it to the page?")
if(write){

    document.write(a);
}
else{
    document.write("Please allow me to write");
}