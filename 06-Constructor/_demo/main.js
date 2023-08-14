///// Object Creators == Constructor Function /////
// ชื่อ function ต้้องขึ้นต้นด้วยตัวใหญ่
// new kw เสมอ
// คนถูกสร้าง = instance
///////// ไว้สร้าง object ใหม่ที่ให้บาง property เหมือนๆกันกับ object อื่น

const log = console.log;
log("Constructor Function");

const dev1 = {
  name: "John",
  age: 32,
  role: "dev",
  salary: 40_000,
  dev: function () {
    console.log("I develop some features");
  },
};

///// Object Creators == Constructor Function /////
// ชื่อ function ต้้องขึ้นต้นด้วยตัวใหญ่

function Developer(name, age) {
  // [1] Implicit create this = {}
  // this = {} // สร้าง object ว่างเปล่า
  this.name = name; //เอา obj ที่เปล่าๆ ไปเพิ่ม key ให้หน่อย >> ที่ชื่อว่า name // {name: "Mai"}
  this.age = age; // {name: "Mai", age: 28} มันค่อยๆประกอบ object ให้เราไปเรื่อยๆ
  this.role = "dev"; // {name: "Mai", age: 28, role: "dev"}
  this.salary = 40_000; // {name: "Mai", age: 28, role: "dev", salary: 40_000}
  this.dev = function () {
    console.log("I develop some features");
  }; // {name......, dev: fn()}
}

// [2] Implicit Return this
// return {name....., dev: fn()}

// this == dev2
// [3] this === Instance

// const dev2 = Developer("Mai", 28); // undefined
// const dev2 = new developer("Mai", 28); // ใช้ได้แต่ไม่ควร เพราะให้เป็นตัวใหญ่ จะได้รู้ว่าเป็น constuctor หรือ ตัวสร้าง
const dev2 = new Developer("Mai", 28);
log(dev2); // {name: 'Mai', age: 28, role: 'dev', salary: 40000, dev: ƒ}
dev2.dev(); // I develop some features

const dev3 = new Developer("Jane", 50);
log(dev3); // {name: 'Jane', age: 50, role: 'dev', salary: 40000, dev: ƒ}
dev3.dev(); // I develop some features
