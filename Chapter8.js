// Q2 Create a website which is capable of storing bookmarks of your favorite website using href 
// document.getElementById("google").addEventListener("click", function(){
//     window.location = "https://www.google.com";
//     window.focus;
// })
// document.getElementById("facebook").addEventListener("click", function(){
//     window.location = "https://www.facebook.com";
//     window.focus;
// })
// document.getElementById("twitter").addEventListener("click", function(){
//     window.location = "https://www.twitter.com";
//     window.focus;
// })


// Q4. Write a javascript program to keep fetching contents of a website (every 5 seconds)

// setInterval( async function() { 
//     let url ='https://jsonplaceholder.typicode.com/todos/1';
//     console.log(await fetch(url))
// },3000);


// Q5 Create a glowing bulb effect using classlist toggle method in javascript 

setInterval(function(){
    document.querySelector("#bulb").classList.toggle("bulb");
},300)