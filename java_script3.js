// in normal function value of this is represent the which value is call
// and in arrow function value of this is represent the window
// const button = document.querySelectorAll(".buttons button");

// button.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     console.log(this.textContent);
//     console.log("you click me!!!!!!!!!");
//   });
// });

// for (let btn of button) {
//   btn.addEventListener("click", function () {
//     console.log(this.textContent);
//     console.log("you click me!!!!!!!!!");
//   });
// }

// event object
// now using for each with arrwo function

// button.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     console.log(event.target.textContent);
//     console.log("you click me!!!!!!!!!");
//     event.target.style.backgroundColor = "yellow";
//     event.target.style.color = "black";
//   });
// });

const button = document.querySelector(".btn");
const body = document.body;
const curent = document.querySelector(".curent");
// console.log(curent);
const randomColorGenerator = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const value = `rgb(${red},${green},${blue})`;
  return value;
};

const randomColor = button.addEventListener("click", () => {
  const random = randomColorGenerator();
  body.style.backgroundColor = random;
  curent.textContent = random;
});

//
