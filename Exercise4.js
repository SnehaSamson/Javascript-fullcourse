// Create a digital seconds clock using setInterval and Date Object in javascript.
// The Date Object can be used to get the Date, time hours and seconds which can be updated using setInterval. Try to keep the UI good looking 

let a = prompt("Enter the number of your choice");
a = Number.parseInt(a);

if(a===12){
    alert("You have entered the correct number");
}
else{
    alert("You have entered the wrong number");
}