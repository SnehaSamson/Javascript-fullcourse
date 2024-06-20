// Asynchronous actions are the actions that we initiate now and they inish later eg setTimeout.  
// Synchronous actions are the actions that initiate and finish one by one. 

// Callback function : is a function passed to another function as an argument which is then invoked inside the outer function to complete an action 


// This is example for synchronous programming 

// let a = prompt("Whatis your name>");
// let b = prompt("What is your age?");
// let c = prompt("What is your favorite color?")
// console.log(a + " is " + b + " years old and has " +c + " favorite color");


// This is asynchronous programming 


// console.log("Start")

// setTimeout(function () {
//     console.log("Hey i am good")
// }, 3000);

// console.log("End")


// CallBacks 

function loadScript(src, callback){
    let script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("The script is loaded with src : "+src);
        callback(null , src)

    }

    script.onerror = function(){
        console.log("Error loaded with src : "+src);
        callback(new Error("Src got some erro"))
    }
    document.body.appendChild(script);

    callback(src);
}


function hello(error, src){
    if(error){
        console.log(error)
        return;
    }
    alert("Hello world" +src)
}

function goodmorning(error, src){
    if(error){
        console.log(error)
        sendEmergencyMessageToCeo();
        return;
    }
    alert('Good Morning '+src)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", goodmorning);

// inversion of control : that we have passed a function to another function named loadScript, we gave another function to a function. Anything can be done with that function 

// - So the biggest problem with callbacks is that we give complete control 
//  2nd problem is pyramid of Doom 
//   -  When we have callback inside callbacks, the code gets difficult to handle 
    //  - As calls become more nested, the code becomes deeper and increasingly more difficult to manage. 
    //  - This is sometimes called callback hell or pyramid of doom.
    


