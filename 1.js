const body = document.body;
const child = document.querySelector(".child");
const p = document.querySelector(".parent");
const gP = document.querySelector(".grandparent");

child.addEventListener("click", () => {
  console.log("you click on child");
});
p.addEventListener("click", () => {
  console.log("you click on parent");
});
gP.addEventListener("click", () => {
  console.log("you click on grandParent");
});

body.addEventListener("click", () => {
  console.log("you click on body");
});

// capture
child.addEventListener(
  "click",
  () => {
    console.log("Capture element child");
  },
  true
);
p.addEventListener(
  "click",
  () => {
    console.log("Capture element parent");
  },
  true
);
gP.addEventListener(
  "click",
  () => {
    console.log("Capture element grandParent");
  },
  true
);

body.addEventListener(
  "click",
  () => {
    console.log("Capture element body");
  },
  true
);
