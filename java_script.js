console.log("hello world");
let name = "talha";
let name2 = "falak Sher";

console.log(name + " " + name2);

console.log(typeof name2);

let name3 = "11";
console.log(typeof +"name3");

name = "    talha       ";
console.log(name.length);
var name4 = name.trim();
console.log(name4.length);
console.log(name4.toUpperCase());

// ternary operator
let age = 4;

let drink = age >= 10 ? "drink" : "milk";

console.log(drink);
console.log("hi");

///////////////////////
// falsy values are "",null,undefined,false,0

let firstName = "";
if (firstName) {
  console.log(firstName);
} else {
  console.log("error");
}
///////////////////

age = 15;
let firstChar = "talha";
if (age > 15 && firstChar[0] === "t") {
  console.log("right");
} else {
  console.log("wrong");
}

//nested if else

//let guess = 12;
//let number = +prompt("guess a number");
//console.log(typeof number);

// if (number === guess) {
//   console.log("your guess is right");
// } else {
//   if (number > guess) {
//     console.log("your guess is high");
//   } else {
//     console.log("your guess is less");
//   }
// }

let day = 4;
switch (day) {
  case 0:
    console.log("monday");
    break;
  case 1:
    console.log("tuesday");
    break;
  case 2:
    console.log("wednesday");
    break;
  case 3:
    console.log("thursday");
    break;
  case 4:
    console.log("friday");
    break;
  default:
    console.log("none");
}

let num = 1;
let number = 0;
while (num <= 10) {
  number = num + number;
  num++;
}
console.log(number);

var number1 = 0;
for (let i = 1; i <= 10; i++) {
  number1 = i + number1;
}
console.log(number1);

// do while and break and continue keyword
// all of the above are primitive

// now we start refrence
// array

let array = ["apple", "bnana", "mangose"];
//push pop shift unshft

console.log(array);
console.log(typeof array);

array.push("talha");
console.log(array);

let removed = array.pop();
console.log(array);
console.log(`poped element are ${removed}`);

array.unshift("hello");
console.log(array);

let erase = array.shift();
console.log(`poped element are ${erase}`);

var length = array.length;
console.log(length);

// primitive and refrence type data structure differnece
//stack in primitive and stack and heap in refrence type
// now i have a clear idea

//how we can make to array
// make a clone and concaat two array
// two method one is . and one is through slice

let array2 = [].concat(array, ["item3", "item4"]);
array.push("hi");
console.log(array === array2);
console.log(
  "answer is false because these are two array which have separate memory"
);
console.log(array);
console.log(array2);

// another method of making a clone
// let array2 = array.slice(0).concat[("item3", "itnem4")];
// console.log(array === array2);
// console.log(
//   "answer is false because these are two array which have separate memory"
// );

console.log("new method using spread operator");
//let new = ["item4","item3"];
// array2 = [...array,...new];
//////////////////////////=/===========================//////////////////////
// twist check kr nichli line me
console.log([..."abe"]);
///////////////////////////////////////////////////////////////
array2 = [...array, "item3", "item4"];
console.log(array === array2);

let array3 = array;
console.log(array === array3);
console.log(array);
console.log(array3);
console.log("answer are true because it have same memory allocaat");

// loops in array
// concat two array in

let array4 = ["talha"];
for (let i = 0; i < array.length; i++) {
  array4.push(array[i]);
}
console.log(array4);

// same as in while
let array5 = [];
var i = 0;
while (i < array.length) {
  array5.push(array[i]);
  i++;
}
console.log(array5);

// for off loop and for in loop
console.log("through for off loop");
let array6 = [];
for (let arr of array) {
  array6.push(arr);
}
console.log(array6);

console.log("through for in loop");
let array7 = [];
for (let arr in array) {
  array7.push(array[arr]);
}
console.log(array7);

// different in between is
// for in loop we have index and for off loop we have direct value
//array destucturing
console.log("array destucturing");
let [var1, var2, ...var3] = array;
console.log(var1);
console.log(var2);
console.log(var3);
//...var3 contains build array which contain all the remaing values

//////////////////=-----------------------------------------///////////////
// objects
key = "email";

const objects = {
  firstName: "talha",
  age: 21,
  "hobbies ha": ["learning", "sleeping", "gaming"],
};

// console.log(objects.name);
console.log(objects["name"]);
console.log(objects["hobbies ha"]);
objects.love_with = "mom";
console.log(objects);
// take key as a variable
objects[key] = "muhammadtalham305@gmail.com";
console.log(objects);

for (let i in objects) {
  //console.log(i);
  //   console.log(objects[i]);
  console.log(`${i} : ${objects[i]}`);
}
// for of loop is skip because it was tricky

//practice question

let obje1 = "keyobj1";
let obje2 = "keyobj2";
let val1 = "value1";
let val2 = "value2";

let obj = {
  [obje2]: val2,
};

obj[obje1] = val1;
console.log(obj);
// i am pro yar

console.log({ ...objects, ...obj, new: "new h ye" });

///////////////////////// ojects inside array////////////////////////////
//very important
const users = [
  { userId: 1, firstName1: "talha", age1: 21 },
  { userId: 2, firstName1: "ali", age1: 17 },
  { userId: 3, firstName1: "ahmad", age1: 19 },
];

for (let user of users) {
  console.log(user.userId, user.firstName1);
}
const [
  { age1, firstName1, userId },
  ,
  { age1: age2, firstName1: firstName2, userId: userId2 },
] = users;
// firstname1 is in first row then nothing
// select in second and age1 from 3 row
console.log(age1);
console.log(firstName1);
console.log(firstName2);
console.log(age2);
//console.log(userId);
///////////////////////////////////////////////
console.log("=================functions========================");
// take a string as input and return first charachter

function firstChar1(string) {
  return string[0];
}
returnFirst = firstChar1("abc");
console.log(returnFirst);

// function targert(myArray, targert) {
//   for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] === targert) {
//       return i;
//     }
//   }
//   return -1;
// }

// const myArray = [1, 2, 4, 54, 3, 24, 2];
// returnTarget = targert(myArray, 24);
// console.log(returnTarget);

// ===========================function expression

// const target = function (myArray1, target) {
//   for (let i = 0; i < myArray1.length; i++) {
//     if (myArray1[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// };

// const myArray1 = [1, 2, 4, 54, 3, 24, 2];
// const returnTarget = target(myArray1, 24);
// console.log(returnTarget);
//=================================================
const target = (myArray1, target) => {
  for (let i = 0; i < myArray1.length; i++) {
    if (myArray1[i] === target) {
      return i;
    }
  }
  return -1;
};

const myArray1 = [1, 2, 4, 54, 3, 24, 2];
const returnTarget = target(myArray1, 4);
console.log(returnTarget);

//// hoisting

//we can call our function before its creation it is only
//possible in function
//declaration not in function expression and arrow funciton

hello();
function hello() {
  console.log("how are u msad ❤❤❤");
}

// lexical scope == check the whole enviroment

myVal = "value1";

const app = () => {
  const myApp = function () {
    console.log("first");
    console.log(myVal);

    const newFunction = () => {
      console.log("new fnction");
    };
    newFunction();
  };

  function myApp1() {
    console.log("sec");
  }

  console.log(myVal);
  myApp();
  myApp1();
};

app();

// let and const are block function
// var a scope funtion

//when we declare a var by using let then no need to declare by let but

//let myNew = "talha"
//let myNew= "new"; //error

//in case of var it can be accessible

//var newName = "msad"
//var newName= "msad"
// not giivnf error

//rest parameter in java script

const restParameter = (a, b, ...c) => {
  console.log(`value of a is ${a}`);
  console.log(`value of b is ${b}`);
  console.log(`value of c is ${c}`);
  console.log(`value of c is `, c);
};

restParameter(1, 2, 3, 4, 5, 6, 7);

// parameter destucturing
//object mene uper se lya h confuse na hona bhai
const param_destucturing = ({ firstName, age, "hobbies ha": hobbies2 }) => {
  console.log(firstName);
  console.log(age);
  console.log(hobbies2);
};
param_destucturing(objects);
//=======================================================================

// call back function
// koi bhi function jab inputme bhi function lega to call back kh laye ga
const f1 = (name) => {
  console.log("this is new");
  console.log(`hello my name is ${name}`);
};
const f2 = (callback) => {
  console.log("this is two");
  callback("talha");
};

f2(f1);

//function return function
// in below code the fucton return a function as a parameter and
// we call that parameterized funcion easily
const f3 = () => {
  console.log("how are u");
  function hello() {
    console.log("i am fine");
  }
  return hello;
};
hello = f3();
hello();


console.log("==========================array methods =============================")

// array method
// for each  , map . filter

newArr = [1, 2, 3, 22, 33];

const multiply = (number, index) => {
  console.log("index is ", index, "and number is ", number);
  console.log(`${number}*2 = ${number * 2}`);
  //return -1;
};

// this code will replace with 0ne line code
// for (let i = 0; i < newArr.length; i++) {
//   multiply(newArr[i], i);
// }

// for each ka kamal
//newArr.forEach(multiply);

// more simple
// anonymous function in for each method
// many ways to make a for each methd is skip down the
// for of loop and traditional for loop

newArr.forEach(function (number) {
  console.log(number * 2);
});

//users uper se object lya h

// users.forEach(function (user) {
//   console.log(user.firstName1);
// });

// for each new method

users.forEach((user) => {
  console.log(user.firstName1);
});
const king = newArr.forEach((number) => {
  console.log(number * 2);
  return number * 2;
});
console.log(king);
//================================================

//map method
//map function always make a new array

const multiply1 = (number, index) => {
  return number * 2;
  //return -1;
};
const newMap = newArr.map(multiply1);
console.log(newMap);
// so for we want to always make a return statement in our function
// for usage of map method;
// map and for each arre same but difference is map make a new array

const newMap1 = newArr.map((number, index) => {
  //return number * 2;
  return `index : ${index} square of ${number} is ${number ** 2} `;
});
console.log(newMap1);

//======================================================

// filter
//in filter method we have return only those values which are true

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// reduce function
//sum of all values

const user2 = [
  { userId: 1, product: "tv", price: 10000 },
  { userId: 2, product: "watch", price: 1000 },
  { userId: 3, product: "mobile", price: 13000 },
  { userId: 4, product: "screen", price: 12000 },
];

const sum = user2.reduce((total_price, current) => {
  return total_price + current.price;
}, 0);
console.log(sum);

//directly sum of all values whhich we want

// total_price    current      sum
// 0               10000       10000
// 10000           1000        11000
// 11000           13000       24000
// 24000           12000       36000
// so sum is 36000

// sort method

const products = [
  { userId: 1, product: "tv", price: 10000 },
  { userId: 2, product: "watch", price: 1000 },
  { userId: 3, product: "mobile", price: 13000 },
  { userId: 4, product: "screen", price: 12000 },
];

const lowToHigh = products.slice(0).sort((a, b) => {
  return a.price - b.price;
});

const highToLow = products.slice(0).sort((a, b) => {
  return b.price - a.price;
});

console.log(products);
console.log(lowToHigh);
console.log(highToLow);

//====================================================
//find method

//
//every method
// check kre ga sari sai h to true de ga

// some method
//kisi aik pr bi condition true answer tru

// fill method
//value , start , end
console.log("fill method");
const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
change = Array.fill(0, 3, 7);
console.log(Array);
console.log(change);
//===================================================
//splice method
//starat, delete ,insert
//plice method change the original array
var fruits = ["apple", "banana", "orange"];

const remaing = fruits.splice(0, 2);
// 0 index  se start
// or 2 element delte krne
// it is also giving deleted item
console.log(fruits);
console.log("delete item are", remaing);

fruits.splice(0, 0, "apple", "banana");
console.log(fruits);

//======================================================
//iterable are those in which we use for of loop;
//string and array are iterable
// object are not iterable
for (let item of fruits) {
  console.log(item);
}
var lastName = "talha";
for (let name of lastName) {
  console.log(name);
}

// array like objects
// are those which have property like length
// and those which we have access through index
// example : strings

// now sets are iterable the basic difference in between set and array
// are set does not allow duplicates
// set ki parantheses me hm string or array hi dal skte h kio k wo iterable h
const newNumber = new Set([1, 2, 3, 4]);
console.log(newNumber);
// no index based access
// order can be change
// two arrays with same elements can be allow because it take different memory

const set = new Set();
set.add(1);
set.add(2);
set.add("items");
set.add("items");
set.add(["apple", "peach"]);
set.add(["apple", "peach"]);

console.log(set);

//to check if element exit in set or not through has
if (set.has(1)) {
  console.log("present");
} else {
  console.log("none");
}

// set are use that area which we want unique elements like id and other thing
// task
const id = [1, 2, 3, 2, 4, 2, 4, 2, 1, 3, 1, 4, 2, 1, 4, 2, 5, 4, 2];
const set1 = new Set(id);
console.log(set1);
length = 0;
for (let id1 of set1) {
  length++;
}
console.log(length);
//===================================================================

//map objects
// remember in objects all keys are string but in map objects all keys
// are not strings it can be number string array objects and object literals

const map = new Map();
map.set("name", "talha");
map.set("age", 12);
map.set([1, 2, 3], "one two three");
map.set({ 1: "one" }, "one");
map.set(1, "one");

// console.log(map);
// console.log(map.get("age"));
// for (let key of map.keys()) {
//   console.log(key, typeof key);
// }
// out put check then u clear all things
// anothe method
for (let [key, value] of map) {
  // console.log(key);
  console.log(key, value);
}

// real life example
const talha = {
  id: 1,
  name: "talha",
  age: "21",
};
const extraInfo = new Map();
extraInfo.set(talha, { phone: "03227323128", love: "Allah" });
console.log(extraInfo);
// check
console.log(extraInfo.get(talha).love);
console.log(extraInfo.get(talha));

//================================================
//method=== function inside objects
function hello1(hobbies1, love1) {
  console.log(
    `helo my name is ${this.name} and my age is ${this.age} ${hobbies1} ${love1}`
  );
}
const user4 = {
  name: "talha",
  age: "21",
  about: hello1,
};

const user5 = {
  name: "ahmad",
  age: "19",
  //about: hello1,
};

const user6 = {
  name: "ali",
  age: "17",
};

user4.about();
// this keyword ka mtlb wo bnda jis ne call kya h is function ko
// window object
// call apply bind
// call key word comment the user5 about and call through by user4
user4.about.call(user5, "cricket", "ALLAH");
// call ka mtlb h kis ne kis ko call ki user4 ne call ki user5  or user5 k pass function nai tha
user4.about.call(user4);
user4.about();
// both are same
//apply bs array pass krdena
hello1.apply(user5, ["football", "ALLAH"]);

hello1.call(user5); // hello1 call kr rha h user5 ko simple
// bind return a function
const func = hello1.bind(user6, "pegion", "mom");
func();
// very very important things
//============================================================================
//arrow function this apne surrounding se leta h
const arrow = {
  name: "talha",
  age: "21",
  about: () => {
    console.log(this.name, this.age);
  },
};

arrow.about();
//==================================================================
// oop (proto,prototype,class);

// const userObject = {
//   about: function () {
//     return `${this.lastName} was ${this.age} years old`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

// const create = (firstName, lastName, age, email, address) => {
//   const user = {};
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.age = age;
//   user.email = email;
//   user.address = address;
//   user.about = userObject.about;
//   user.is18 = userObject.is18;
//   return user;
// };

// const newUSer = create("Muhammad", "talha", 21, "abc@gmail.com", "28/2-L");
// const newUSer1 = create("Muhammad", "ahmad", 19, "abc@gmail.com", "28/2-L");
// const newUSer2 = create("Muhammad", "ali", 17, "abc@gmail.com", "28/2-L");
// console.log(newUSer);
// const about = newUSer.about();
// console.log(newUSer2.about());
// const about1 = newUSer.is18();
// console.log(about);
//===================================================================
// agr aik object me aik chese nai h dusre me h to wo la kr de do
//ye scene h

let newObje = {
  key1: "bal",
  key2: "bal2",
};

let newObje2 = Object.create(newObje);
console.log(newObje2);
//  now link was created  but it was now empty

newObje2.key3 = "bal3";

console.log(newObje2.key3);

console.log(newObje);
console.log(newObje2.key2);
// key2 nai pr link ki waja se la kr di
// shallow means same jagah point kr rhe h pr memory alag h
// now change in above code

//============================================================

const userObject = {
  about: function () {
    return `${this.lastName} was ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

const create = (firstName, lastName, age, email, address) => {
  const user = Object.create(userObject);
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  user.email = email;
  user.address = address;
  user.about = userObject.about;
  user.is18 = userObject.is18;
  return user;
};

const newUSer = create("Muhammad", "talha", 21, "abc@gmail.com", "28/2-L");
const newUSer1 = create("Muhammad", "ahmad", 19, "abc@gmail.com", "28/2-L");
const newUSer2 = create("Muhammad", "ali", 17, "abc@gmail.com", "28/2-L");
console.log(newUSer);
const about = newUSer.about();
console.log(newUSer2.about());
const about1 = newUSer.is18();
console.log(about);

// fucntion take prototype but object and array does not take prototype
// prototype skip and prototype is a object
// so function can be treated as a object and we can add thing in this
//new keyword
class animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  isEat() {
    console.log(`${this.name} is eating`);
    return null;
  }
  isCute() {
    return true;
  }
}

class dog extends animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }
  run() {
    console.log(`${this.name} is running with this speed: ${this.speed}`);
    return null;
  }
}

const animal1 = new animal("cat", 2);
console.log(animal1);
animal1.isEat();
console.log(animal1.isCute());
const animal2 = new dog("sunny", 2, "34kph");
animal2.run();
