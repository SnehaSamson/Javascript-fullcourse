// Browser Events : An event is a signal that something has happened.An
// All the DOM nodes generate such signals. 

// Some important DOM events are :
// Mouse events : click, contextmenu(right click),mouseover/mouseout, mousedown/mouseup, mousemove.
// Keyboard events : keydown and keyup. 
// form element events : submit, focus etc 
// document events : DOMConetntLoaded.

// let a = document.getElementsByClassName("container")[0]
// a.onclick = () =>{
//     let b = document.getElementsByClassName("container")[0]
//     b.innerHTML = "Hello world"
// }


// Note : Adding a handler with javascript overwrittes the existing handler.
// addEventListener is used to assign multiple handlers to an event.

// The Event Object : When an event happens, the browser creates an event object, puts details into it and passes it as an argument to the handler.
// elem.onclick = function(event){
//     ...
// }

// event.type : Event type 
// event.currentTarget : Element that handled the event 
// event.clientx/event.clientY : Coordinates of the cursor


let x = function(e){
    console.log(e);
    console.log(e.target);
    console.log(e.type)
    console.log(e.currentTarget);
    console.log(e.clientX , e.clientY)

// alert("Hello world1");
console.log("Hello world")
}

// let y = function(e){
//     alert("Hello world 2");
// }

let btn = document.getElementById("btn");

btn.addEventListener('click',x)

// btn.addEventListener('click',y);

// let a = prompt("What is your number")
// a= Number.parseInt(a);

// if(a === 2){
//     btn.removeEventListener('click',x);
// }