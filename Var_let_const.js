console.log("This is to demonstrate the differnce between var, let and const");
var a = 45;
var b = "Sneha";
var c = null;
var d = undefined;

let name = "Sneha";
// let name ="Shona"; let cannot be re- declared.
name="Santhosh";//let can be updated but cannot be re-declared

const author ="Sneha Sam";
// author = "Sharon" const variables neither be re-declared nor be updated.

console.log(author);

{
    var b = 'this';
    console.log(b);
}
console.log(b);