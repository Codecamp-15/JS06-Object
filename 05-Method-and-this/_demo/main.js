//###----METHOD------###

const log = console.log;
log("Method for object and this keyword");

//each record => called property
//each property => <key>:<value>

//--Section 1--

//some record =><key>:<FN>
//called method == ability of Object

// function devWebsite(){
//     console.log("Iam working");
// };

// function meeting(){
//     console.log("Iam in the meeting");

// }

// function freeTime(){
//     console.log("Build my ownsites");
// }

// const programmer = {
//     name : 'Pernille',
//     age : 40,
//     dev : devWebsite,  //dev is a method (but we call it key when using regular property)
//     meet: meeting
//     hobby: freeTime,
// }

//when you wanna call the key that store FN
//You have to <object>.method()

//programmer.dev()
//programmer.meet()
//programmer.hobby()

// Section 2

// const programmer = {
//   name: "John",
//   age: 30,
//   dev: function () {
//     console.log("Iam working");
//   },
//   meet: () => console.log("Iam in a meeting"), //arrow function in object.method

//   sleep() {
//      return("Iam sleeping");

//   },
// };
// log(programmer.dev());
// log(programmer.meet());
// console.log(programmer.sleep())

///Mini-lap
//Create your own Object

function cook() {
  console.log("Mia cooks very well");
}
const mia = {
  name: "Panalee",
  eyeColor: "dark brown",
  hair: "long",
  dinner: cook,
  petLover: () => console.log("Cats:Whiskey and Kirin"),
  design() {
    console.log("I can do UX,UI");
  },
  focus() {
    log(`Iam workinging in focusing mode`);
  },
};

log(mia.eyeColor);
log(mia.petLover());
log(mia.design());
log(mia.focus());

//OOP : Object Oriented Program
const calculator = {
  sum: (x, y) => x + y,
  minus: (x, y) => x - y,
};

let r1 = calculator.sum(6, 7);
let r2 = calculator.minus(7, 3);
log(r1, r2);
//

const car = {
  made: "Tesla",
  model: "x",
  drive: () => console.log("Driving"),
  "auto pilot": () => console.log("Self Driving"),
};

car.drive();
car["auto pilot"]();

///###### 4. This Key
//JS Keyword : if else if, for, while, do, switch, this

const user = {
  name: "Codecamp",
  age: 15,
  sayHi: function () {
    console.log(`Hello ${this.name}`);
  },
  growOld: function () {
    console.log(this);
    this.age++;
  },
};

// user.sayHi();
// user.name = 'Software Park';
// user.sayHi();

// console.log(user.age)
// console.log(user.growOld());
// console.log(user.age)

function dev(feature) {
  console.log(`${feature} feature developer by ${this.name}`);
}

const programmer1 = {
  name: "John",
  develop: dev,
};

const programmer2 = {
  name: "Jane",
  develop: dev,
};

programmer1.develop();
programmer2.develop();

//---CHECK POINT--- this using to call method in object

//Global
//window
// this.alert('Iam')
// window.alert('Iam Global');

// function sayHi() {
//     console.log(this);
// };
// var a = "m";

//Execution Contect = window;
// window.sayHi();
// this.sayHi();
// sayHi();

//Funtion Context = Window
var name = "Codecamp";
function sayHello() {
  console.log(this.name);
}

console.log(sayHello());

const userH = {
  name: "John",
  age: 33,
  say: sayHello,
};

user.say();

//Arrow function has no ability to create Context
//Loose Context => Chain to window
