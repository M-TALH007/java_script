console.log("hi i am back");
// this vedeo works on the basics of compiler construction
// hoisting before code execute variable are stored in memory are called hoisting and
// let and const are uninitialize if we call first and reply later and give it eror
// but in var case it will assign null
//this is the basic difference

const document1 = document.getElementById("main-heading");
console.log(document1);
console.log(document1.innerText);
console.log(document1.textContent);
// this way we can change our text
document1.textContent = "What Is Your Plan";
console.log(document1.textContent);
console.log(document1.innerHTML);

// iner html gives only that part which display in html and text content also
// gives that part which is not display

// query selector select all element but get element by id only select id

const que = document.querySelector(".nav-item");
console.log(que);
// it gives only first class result
const que1 = document.querySelectorAll(".nav-item");
console.log(que1);
// it gives all of the class which name nav-item

// change style

const style1 = document.querySelector("div.headline h2");
style1.style.color = "yellow";
style1.style.backgroundColor = "black";

// get and set attribute

const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1));
link.setAttribute("href", "https://google.com");
console.log(link.getAttribute("href"));

const new1 = document.getElementsByClassName("nav-item"); // html collection
console.log(new1);

// array like object means just talking about length and index
// it gives array like object and we did not use array method
// like map find reduce we can not use
//we can user index and traditinal loop for off not use for each
const que2 = document.querySelectorAll(".nav-item"); // node list
console.log(que2[1]);
// same work as working byClassName

let change = document.getElementsByTagName("a");
console.log(change);

// for (let i = 0; i < change.length; i++) {
//   const my = change[i];
//   my.style.backgroundColor = "white";
//   my.style.color = "black";
//   my.style.font = "bold";
// }

// for (let my of change) {
//   my.style.backgroundColor = "white";
//   my.style.color = "black";
//   my.style.font = "bold";
// }

// not working but when we make it into array then works
// change html collecton means array like object into array
change = Array.from(change);
change.forEach((my) => {
  my.style.backgroundColor = "white";
  my.style.color = "black";
  my.style.font = "bold";
});
// but in nodelist we can use all 3 for each for off and traditional for loop

// append prepend  remove by using createElement
//================================= very important =====================================
// not working with pre append
// const ele = document.createElement("li");
// ele.textContent = "hi";
// const todo = document.querySelector(".todo-list");
// todo.prepend(ele);
// console.log(todo);

// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();

// before after method

//=====================================================================
//static and live list
//=====================================================================
// working with query selector is static means  change in the web browser but not change in console
// and opposite working in live script

// const todo1 = document.querySelectorAll(".todo-list li");
// const li = document.createElement("li");
// li.textContent = "item 2";
// const ul = document.querySelector(".todo-list");
// ul.append(li);
// console.log(todo1);

// working with live
const todo1 = document.querySelector(".todo-list");
const list = todo1.getElementsByTagName("li");
const li = document.createElement("li");
li.textContent = "item 2";
todo1.append(li);
console.log(todo1);
//========================================================================
// event listner
const btn = document.querySelector(".btn-headline");
btn.addEventListener("click", () => {
  console.log("you click me");
});

// in normal function value of this is represent the which value is call
// and in arrow function value of this is represent the window
//
// key press
// mouserover mouseleave
//
