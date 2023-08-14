const log = console.log;
log('Method and this keyword');

// #####################################
// ####### 1. Intro to Method
// #####################################

// Object == 

// each record => called property
// each property => <key>: <value>

// some record => <key>: <FN>
// called method == ความสามารถของ Object
/*
const programmer = {
    name: 'Pavit',
    age: 30,
    dev: devWebsite,
    meet: meeting,
    sleep: sleep,
};

function devWebsite() {
    console.log("I'm working");
}

function meeting() {
    console.log("I'm meeting");
}

// property
// Syntax : <obj>.<key>
log(programmer.name);
log(programmer.age);

function sleep() {
    console.log("I'm sleeping");
}

// method == ความสามารถของ Object
// Syntax : <obj>.<method>()
programmer.dev();
programmer.meet();
// เพิ่ม method ให้ programmer 1 อย่ง และลองเรียกใช้งาน
programmer.sleep();
*/

// #####################################
// ####### 2. Alternative Syntax
// #####################################
/*
const programmer = {
    // # property shorthand
    name,
    age,
    dev: function() {
        console.log("I'm working");
    },
    meet: () => console.log("I'm meeting"),
    // # method shorthand
    sleep() {
        console.log("I'm sleeping");
    },
    // sleep : () => console.log("I'm sleeping")
};

programmer.dev();
programmer.meet();
programmer.sleep();
*/

// Mini-lab
// สร้าง Object ของตัวเอง
// ระบุคุณสมบัติตัวเองซัก 2-3 ข้อ
// ระบุความสามารถของตัวเองสัก 4 อย่าง (cover ทุก syntax)
// key : namedFunction
// key : anonymous FN
// key : arrow FN
// key : shortHand
/*
function playSport() {
    console.log("I'm playing football");
}

const me = {
    name: 'Kasama',
    hair: 'Black',
    eye: 'Brown',
    gender: 'Female',
    myEx: ['John', 'Jane'],
    sport: playSport,
    sleepAllDay: function () {
        console.log("I'm sleeping all day");
    },
    eatAllNight: (menu) => console.log(`I'm eating ${menu} all the time`),
    focus(task) {
        console.log(`I'm working on ${task} in Focus mode`);
    },
    // focus : () => {logic}
    // focus : function focus () {logic}
};

me.football();
me.sleepAllDay();
me.eatAllNight('TAX');
me.focus('Javascript lab');
*/

// OOP : Object Oriented Programming
/*
const car = {
    brand: 'Tesla',
    model: 'X',
    drive: () => console.log('Driving'),
    'auto pilot': () => console.log('Self Driving'),
}
log(car.brand, car.model);

// Caller.Method
car.drive();
car['auto pilot'];

const calculator = {
    sum: (x, y) => x + y,
    minus: (x, y) => x - y,
};

let r1 = calculator.sum(5, 7);
let r2 = calculator.minus(7, 3);
console.log(calculator);
*/

// #####################################
// ####### 4. This Keyword
// #####################################
// "this" = the current EXECUTION CONTEXT

// JS Keyword : if, else, for, while, do, switch, this

// const user = {
//     name: 'codecamp',
//     age: 15,
//     sayHi: function () {
//         console.log(`Hello ${this.name}`);
//     },
//     growOld: function () {
//         this.age++;
//     },
// };
// // Question : ทำอย่างไร method จะสามารถเข้าถึง property ของตัวเองได้

// user.sayHi();
// user.name = 'software park'
// user.sayHi();

// log(user.age);
// user.growOld();
// log(user.age);

// Q : ค่าของ this ถูก Solve ตั้งแต่ตอนเขียน function หรือเปล่า ?
// A : ไม่
// function dev() {
//     console.log(`This feature developed by ${this.name}`)
// }

// const programmer1 = {
//     name: 'John',
//     develop: dev,
// }

// const programmer2 = {
//     name: 'Jane',
//     develop: dev,
// }

// // A : this ถูก Solve ตอนเรียกใช้ Method
// // Caller.method => this == Caller == Object before the dot

// // Checkpoint-1 : this == object ที่เรียกใช้ meethod
// console.log(window);
// console.log(this);

// programmer1.develop('Login');
// programmer1.develop('Cart');
// programmer2.develop('Register');

// ####### Behind the Scene of `this` keyword #########
// ########################################
// ####### 5. Exwxcution Context == Caller
// ########################################

// Global(Browser) : window object
// window.alert("I'm Global this");
// alert("I'm execute in window");

// Function Declaration จะทำให้ sayHi ไปติดใน windowObj
// Hoisting 
function sayHi() {
    console.log(this); // `this` คือ Object window
}
var a = 'm';

// // Execute Context = Window
// window.sayHi();
// this.sayHi();
// sayHi();

// Function Context
var name = 'Codecamp';
function sayHello() {
    console.log(this.name);
}

// Window is Caller
// sayHello() == window.sayHello
sayHello();
window.sayHello();

const user = {
    name: 'John',
    say: sayHello,
    scream: () => {
        console.log(`scream by ${this.name}`);
    },
    scm: function () {
        console.log(`scream by ${this.name}`);
    }
}

// # User is Caller
user.say();
// Summary :
// this == Object Caller
// this คือ Object ที่เรียกใช้ FN นั้น ๆ


// # Arrow FN ไม่มีความสามารถในการสร้าง Context
// Loose Context => Chain to Window
// Don't use `this` keyword with Arrow FN
user.scream(); // => 'scream by Codecamp'
user.scm(); // => 'scream by John'

