let name = "Sneha Samson Mullur";
// console.log(name);

// Methods used string manipulation 

// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// Slice will take two arguments 1st argument index value from where the new string should start 2nd argument index-1 till that the string will be printed 
// If only one argument is given then it will print the new string from the starting index till end of the string 

// console.log(name.slice(1,4));
// console.log(name.slice(4));

// Replace : It will replace the string 

// console.log(name.replace("neha","NEHA"));

let friend = "Santhosh";
//console.log(name.concat(" is a wife of "+ friend+ " Ok?"));

let friend2 = "        Meena        ";
// console.log(friend2);
//console.log(friend2.trim());


// important Note : Strings are immutable means you cannot change the string but you can create a new string In order to access the characters at an index we can use the following syntax 
let name3 = "Sneha";
// console.log(name3[0])// -> Prints S
// console.log(name3[1])// -> Prints n 
name3[5] = 'p';//not possible to add the new character to the string.
console.log(name3);
for(let i of name3)
    {
        // console.log(i);
    }
