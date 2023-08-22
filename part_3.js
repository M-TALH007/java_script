// set time out
// set time interval\
// it will give us id in  return and we will stop this progrress with clearInterval;

console.log("h2");

const id = setInterval(() => {
  console.log("hi");
}, 1000);

console.log("hu 2");
clearInterval(id);

// call backs function inside a function
// call back hell and pyramid of doom
// to prevent all of them we need to use promises
// see vedeo part if forget
//-----------------------------------------------------------------

// promises
// console.log("script start");
// const array = ["rice", "food", "patatoes", "khajoor"];

// const fruits = new Promise((resolve, reject) => {
//   if (array.includes("rice") && array.includes("food")) {
//     resolve({ value: "ok" });
//   } else {
//     reject(error);
//   }
// });

// fruits // micro task queue store
//   .then((result) => {
//     const ans = result.value;
//     console.log("fruits are : ", ans);
//   })
//   .catch((error) => {
//     console.log("error are : ", error);
//   });

// const id1 = setTimeout(() => {
//   console.log("hi");
// }, 1000);

// console.log("script end");

//-------------------------------------------------

// promises are add in microtask queue;
// micro task queue is high priorty then call back queue

//function return a promise

const function1 = () => {
  const array = ["rice", "food", "patatoes", "khajoor"];
  return new Promise((resolve, reject) => {
    if (array.includes("rice") && array.includes("food")) {
      resolve({ value: "ok" });
    } else {
      reject(error);
    }
  });
};
function1() // micro task queue store
  .then((result) => {
    const ans = result.value;
    console.log("fruits are : ", ans);
  })
  .catch((error) => {
    console.log("error are : ", error);
  });

// promise chaining and set time out function
const function2 = () => {
  return new Promise((resolve, reject) => {
    const result = true;
    setTimeout(() => {
      if (result) {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
};

function2()
  .then(() => {
    console.log("resolve");
    const value = "talha";
    return value;
    // if we did not write return then we it will give undefined
  })
  .then((value) => {
    const value1 = " king";
    value = value + value1;
    console.log(value);
    return value;
  })

  .then((value) => {
    const value1 = " king2";
    value = value + value1;
    console.log(value);
    return value;
  })
  .catch(() => {
    console.log("reject");
  });
//==========================================================================
// promising chaining

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");

function myFunction(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject();
      }
    }, time);
  });
}

// myFunction(heading1, "one", "red", 1000)
//   .then(() => {
//     return myFunction(heading2, "two", "purple", 1000);
//   })
//   .then(() => {
//     return myFunction(heading3, "three", "green", 1000);
//   })
//   .then(() => {
//     return myFunction(heading4, "four", "brown", 1000);
//   })
//   .then(() => {
//     return myFunction(heading5, "five", "magenta", 1000);
//   });

// for pro programer
myFunction(heading1, "one", "red", 1000)
  .then(() => myFunction(heading2, "two", "purple", 1000))
  .then(() => myFunction(heading3, "three", "green", 1000))
  .then(() => myFunction(heading4, "four", "brown", 1000))
  .then(() => myFunction(heading5, "five", "magenta", 1000));
