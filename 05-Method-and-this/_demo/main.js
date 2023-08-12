const log = console.log;
log("Method and this keyword");

/////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// 1. Method  /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

//////// Object === Collection of properties &/ methods //////////
// each record => called property = ในแต่ละข้อมูล เราเรียกมันว่าคุณสมบัติ หรือ property
// each property => <key>: <value>,

// some record => <key>: <FN>
// called method == ability/ ความสามารถของ object

// function devWebsite() {
//   console.log("I'm working");
// }

// function meeting() {
//   console.log("I'm meeting");
// }

// function sleeping() {
//   console.log("I'm sleeping");
// }

// const programmer = {
//   name: "Mai", // 1 record = 1 property
//   age: 28, // 1 record = 1 property
//   dev: devWebsite, // 1 record = 1 method
//   // record นี้ชื่อว่า dev ที่เก็บสิ่งที่เรียกว่า function
//   meet: meeting,
//   sleep: sleeping,
// };

// /////////////////// Property /////////////////
// ///// SYNTAX: <obj>.<key> /////
// log(programmer.name);
// log(programmer.age);

// /////////////////// Method/////////////////
// // method === ความสามารถของ Object
// ////// SYNTAX: <obj>.<method>() ////
// programmer.dev(); // ถ้าเป็น method => ต้องใส่วงเล็บ () ด้วย เพราะว่ามันเป็น function
// programmer.meet();
// programmer.sleep();
// programmer.dev; // === function devWebsite

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////// 2. Alternative Syntax ///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

// const programmer = {
//   name: "John", // property
//   age: 30, // property

//   //// Method /////
//   // เขียนแบบ explicit
//   dev: function () {
//     console.log("I'm working");
//   }, // จะมีชื่อหรือไม่มีชื่อก็ทำได้ // method

//   // เขียนแบบ arrow function
//   meet: () => console.log("I'm meeting"), // method

//   // method shorthand
//   sleep() {
//     console.log("I'm sleeping");
//   },
//   // sleep: () => console.log("I'm sleeping")
// };

// programmer.dev();
// programmer.meet();
// programmer.sleep();

// /////////////////////////////////
// ///////// Mini Lab //////////////
// /////////////////////////////////

// // สร้าง object ของตัวเอง
// // ระบุคุณสมบัติของตัวเอง 2-3 ข้อ
// // ระบุความสามารถของตัวเอง 4 อย่าง (cover ทุก syntax)
// // key: namedFunction
// // key: anonymous FN
// // key: arrowFN
// // key: shortHand

// // function playSport() {
// //   console.log("I'm playing football");
// // }

// function playSport(sport) {
//   console.log(`I'm playing ${sport}`);
// }
// // log(typeof playFootball);

// const me = {
//   name: "Mai",
//   hair: "black",
//   eye: "brown",
//   gender: "female",
//   myEx: ["John", "Jane"],

//   // key: namedFunction
//   sport: playSport,

//   // key: anonymous function
//   sleepAllDay: function () {
//     console.log("I'm sleeping all day");
//   },

//   // key: arrow function
//   //   eatAllNighit: () => console.log("I'm eating all the time"),
//   eatAllNighit: (menu) => console.log(`I'm eating ${menu} all the time`),

//   // key: shortHand
//   //   focus() {
//   //     console.log("I'm working in Focus mode");
//   //   },
//   focus(task) {
//     console.log(`I'm working on ${task} in Focus mode`);
//   },

//   // focus: () => {...logic....}
//   // focus: function focus () {...logic...}
// };

// me.sport("basketball");
// me.sport(); // I'm playing undefined
// me.sleepAllDay();
// me.eatAllNighit("TAX");
// me.focus("javascript lab");

// //////////////////////////////////////////////////////////////////////////////
// ////////////////////// 3. OOP: Object Oriented Program ///////////////////////
// //////////////////////////////////////////////////////////////////////////////

// const car = {
//   brand: "Tesla",
//   model: "X",
//   speed: 80,
//   drive: () => console.log("Driving"),
//   "auto pilot": () => console.log("Self Driving"),
// };

// log(car.brand, car.model); // Tesla X // property

// car.drive();
// car["auto pilot"](); // Self Driving

// //////

// const calculator = {
//   sum: (x, y) => x + y,
//   minus: (x, y) => x - y,
// };

// let r1 = calculator.sum(5, 7);
// let r2 = calculator.minus(7, 3);
// log(r1, r2);

// log(car.speed); // 80
// car.speed = calculator.sum(car.speed, 20); //  car.speed = 80 + 20
// // เอา 2 objects มา interact กัน // นิยมกับระบบใหญ่ๆ เพราะมันแบ่งสโคปความรับผิดชอบได้
// // let car2 = calculator.sum(car.speed, 20);
// log(car.speed); // 100

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////// 4. This Keyword /////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

// JS Keyword: if, else, for, while, do, switch, this

//////////////////////////
/////// kw this //////////
// this == user, this.age == user.age // this คือตัวมันเอง
// ข้อดีของ this คือทำให้มันเข้าถึง property ของตัวมันเองได้
/////////////////////////

// Question: This ถูกตีค่า/ solve ตั้งแต่รอนที่เขียน function หรือเปล่า ?
// Answer: ไม่, this จะยังไม่มีทางรู้ว่าตัวหลังมันจะเป็น object ไหน หรือค่าอะไร ่เช่น this.name มันยังไม่รู้ว่า name คืออะไร
// This จะถูก solve ตอนเรียกใช้ method
// Caller.method => this == Caller == Object before the dot
// This == Dynamic Caller/ Dynamic Context
// checkpoint >>>>>> this == object ที่เรียกใช้ method

const user = {
  name: "codecamp",
  age: 15,
  sayHi: function () {
    // console.log(`Hello codecamp`);
    console.log(`Hello ${this.name}`); // ใช้ kw this
  },

  growOld: function () {
    console.log(this); // this == user, this.age == user.age // this คือตัวมันเอง
    this.age++;
  },
};

// Question: ทำอย่างไร ให้ method ของเราสามารถเข้าถึง property ของตัวเองได้
user.sayHi();
// user.name = "Software Park";
// user.sayHi(); // Hello codecamp
user.name = "Software Park";
user.sayHi(); // Hello Software Park เพราะเราใช้ kw this อยู่ ทำให้มันเข้าถึง property line 187 ได้ เข้าถึง key ต่างๆได้

log(user.age);
user.growOld();
log(user.age);

////////////////////////////

///// การใช้ this ใน method ของ object ที่ไม่ใช่ arrow function

function dev() {
  console.log(`This feature developed by ${this.name}`); // this ไม่ได้ถกตีค่าตอนนี้ เพราะมันยังไม่รู้ว่า name คือใคร หรือ ใคร call มัน
}
dev(); // This feature developed by

function Feature(feature) {
  console.log(`${feature} feature developed by ${this.name}`);
}

const programmer1 = {
  name: "John",
  develop: dev,
  feat: Feature,
};

const programmer2 = {
  name: "Jane",
  develop: dev,
};

programmer1.develop(); //This feature developed by John // this ถูกตีค่าตอนนี้ มันรู้แล้วว่า programmer1 เป็นคนเรียกใช้มัน และ programmer1 มี property เป็นค่า John
programmer2.develop(); //This feature developed by Jane

programmer1.feat("Login"); // Login feature developed by John

// /////// ที่มาของ this /////
// console.log(window);
// console.log(this);

// FN ถูกเรียกที่ไหน
// alert("Hi"); == window.alert("Hi") == this.alert

/////////////////////////////////////////////////////////////////////////////////
/////////////////// 5. Execution Context == Caller /////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

// Global(Browser) Context : window object

// window.alert("I'm Global");
// // this.alert("I'm Global this");
// alert("I'm execute in window");

// FN Declaration จะทำให้ sayHi ไปติดใน windowObj
// เป็นที่มาของ Hoisting
function sayHi() {
  console.log(this); // window
}
var a = "m";

// Execute Context = Window
// ให้ผลออกมาเหมือนกันหมด
window.sayHi();
this.sayHi();
sayHi();

// Function Context
// -- ประกาศแบบ declaration
var name = "Codecamp";
function sayHello() {
  console.log(this.name);
}

// Caller = window
sayHello();
window.sayHello();

const user2 = {
  name: "John",
  say: sayHello,
  scream: () => {
    console.log(`scream by ${this.name}`);
  },
  srcm: function () {
    console.log(`scream by ${this.name}`);
  },
};

// Caller = user
user2.say();
//// SUMMARY = this === Object Caller

// Arrow ไม่มีความสามารถในการสร้าง Context >> มันเลยไปเอา this.name อิงจาก window/ global context
// Loose Context => Chain to Window
// ******* SUMMARY = ห้ามใช้ this กับ arrow function
user2.scream(); // -- ประกาศแบบ arrow // >> scream by Codecamp = BUGGGGGGGGGGGG
user2.srcm(); // scream by John
