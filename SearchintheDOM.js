// Change the card title 

let ctitle = document.getElementsByClassName("card-title")[0];
ctitle.style.color = "red";

let ctitles = document.querySelectorAll(".card-title");
ctitles[0].style.color = "green";
ctitles[1].style.color = "blue";
ctitles[2].style.color = "cyan";
console.log(ctitles);

document.querySelector(".this").style.color = "red"
document.querySelector(".this").style.background = "black"

console.log(document.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"));

console.log(document.getElementsByName("search"));