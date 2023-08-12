const log = console.log;
log("Learn Ref.");

// Copied by Value
// Copied by Reference

//////////////// PRIMITIVE ////////////////

let message = "Hello";

//***** ***** Copied by Value ***** *****
let word = message;

log(message); // Hello
log(word); // Hello

message = "Hi";
log(message); // Hi
log(word); // Hello ยังคงเก็บ string คำว่า Hello ไว้อยู่

////////////////// OBJECT //////////////////
// user เก็บ address ของ Literal Object ไว้ ไม่ได้เก็บ obj ทั้งก้อน
let user = {
  name: "John",
  age: 33,
};

// ***** ***** Copied by Reference ***** *****
// assign address บ้านเลขที่ทั้งบ้าน ของ user ให้กับ employee
// เป็นการบอกที่อยู่ให้กับอีกตัวแปรนึง ไม่ได้โยนทุกอย่างใน address ให้
// แต่ว่าเหมือนให้ที่อยู่บ้านกับตัวแปรนั้นไป ทำให้เข้าถึงได้

let employee = user;
log(employee);

user.name = "Jane";
log(user.name); // Jane

employee.name = "Joe";
log(user.name); // Joe
log(employee.name); // Joe

employee.age = 50;
log(user.age); // 50

//----------//
let a = {};
b = a;
a == b; // true เพราะมันเช็คจาก address ที่เป็นบ้านหลังเดียวกัน
a === b; // true

let c = {};
let d = {};
c == d; // false เพราะเป็นคนละ object กัน คนละ address เหมือนบ้าน townhouse ที่หน้าตาเหมือนกันแต่คนละหลัง
