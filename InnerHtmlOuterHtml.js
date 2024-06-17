// let x = document.getElementsByTagName('span')[0]
// console.log(x)
// let y = document.getElementsByTagName('span')[0]
// console.dir(y)
// console.log(document.body.firstChild.nodeName);
// console.log(document.body.firstElementChild.nodeName);



// console.logThen. go back. It's time to make the move. You don't have time. You'll look up the time. Play. (first.innerHTML);
// first.innerHTML = '<i>I am Italic</i>';
// console.log(first.innerHTML);
// console.log(first.outerHTML);
// first.outerHTML = '<div>Hey i am div'
// // console.log(first.outerHTML);

// console.log(document.body.textContent)
// console.log(document.body.firstChild.data);

// Hidden Property 
// first.hidden = false


// HTML Attributes and their methods. 

// let a = first.getAttribute('class');
// console.log(a);

// elem.hasAttribute(name) : Method to check for existence os an attribute. 
// elem.getAttribute(name) : Method used to get the value of an attribute. 
// elem.setAttribute(name,value) : Method used to set the value of an attribute. 
// elem.removeAttribute(name) : Method to remove the attribute fron element.
// elem.attributes : Method to get the collection of all attributes. 

// let first = document.getElementById("first");
// console.log(first.hasAttribute("class"));
// console.log(first.hasAttribute("style"))
// // first.setAttribute("hidden", "true")
// first.setAttribute("class", "true sachin")
// // first.removeAttribute("class");
// console.log(first.attributes);

// console.log(first.dataset);
// console.log(first.dataset.game);
// console.log(first.dataset.player);


// HTML INsertion Methods 

// let a = document.getElementsByTagName('div')[0];
// a.innerHTML = a.innerHTML + '<h1>Hello World</h1>';

// Creating an Element in DOM
// let div = document.createElement('div');
// div.innerHTML = '<h1>Hello World</h1>'
// a.appendChild(div);
// a.append(div);
// a.prepend(div);
// a.before(div);
// a.after(div);
// a.replaceWith(div);


// Insert Adjacent HTML, Insert Adjacent Element and insert adjacent Text

// Adding the node : 

// first.insertAdjacentHTML('beforebegin','<div id="test">beforebegin</div>');
// first.insertAdjacentHTML('beforeend','<div id="test">beforeend</div>');
// first.insertAdjacentHTML('afterbegin','<div id="test">afterbegin</div>');
// first.insertAdjacentHTML('afterend','<div id="test">afterend</div>');

// node removal : 

// first.remove();

// Changing HTML classes using javascript : ClassName and ClassList 

// first.className = "text-dark red";
// console.log(first.classList);
// first.classList.remove("red");
// first.classList.append("red");
// first.classList.add("red");
// first.classList.toggle("red");
// console.log(first.classList.contains("red"));
















