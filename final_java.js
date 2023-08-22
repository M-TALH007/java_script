const form = document.querySelector(".form-todo");
const input = document.querySelector(".form-todo input[type=text]");
const add = document.querySelector(".todo-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  const li = document.createElement("li");
  const newValue = `<span class="text">${value}</span>
  <div class="todo-buttons">
    <button class="todo-btn done">Done</button>
    <button class="todo-btn remove">Remove</button>
  </div>`;
  li.innerHTML = newValue;
  add.append(li);
  //   console.log(e.target);
  input.value = "";
});

add.addEventListener("click", (event) => {
  console.log(event.target);
  if (event.target.classList.contains("remove")) {
    const li = event.target.parentNode.parentNode;
    li.remove();
  }
  if (event.target.classList.contains("done")) {
    console.log("grat");
    const liSpan = event.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
});
