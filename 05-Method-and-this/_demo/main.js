function devWebsite() {
  console.log("I'm working");
}

const programmer = {
  name: "Time",
  age: 23,
  dev: devWebsite,
  meet: () => console.log("I'm meeting"),
  sleep() {
    console.log("I'm sleeping");
  },
};

programmer.dev();
programmer.meet();
programmer.sleep();

const time = {
  name: "Time",
  age: 23,
  height: 167,

  devWebsite,
  eat: function () {
    console.log("Eat");
  },
  snore: () => console.log("Snore"),
  yell() {
    console.log("Yell");
  },
};

let user = {
  name: "codecamp",
  age: 15,
  sayHi: function () {
    console.log(`Hello ${this.name}`);
  },
};

user.sayHi();
user.name = "software park";
user.sayHi();
const a = user.sayHi;
a();

//? This = Object before the dot (คนเรียกใช้)
function dev() {
  console.log(this.name);
}

//? const dev = ()=>console.log(this.name)

const b = {
  name: "John",
  dev,
};

const c = {
  name: "Jane",
  dev,
};

b.dev(); //คนที่ call มัน เป็น object แล้ว // this หมายถึง คนเรียก || current execution context
c.dev();

// arrow function ไม่สามารถ ทำ execution context ได้ (Loose Context) ดังนั้นมันเลยไม่มี this keyword เป็นของตัวเอง ไปเอาของ global object

let d = {
  name: "Time",
  e: {
    name: "Taipei",
    na: () => console.log(this),
  },
};

d.e.na();

// เห็นปะ
let f = {
  name: "Time",
  e: {
    name: "Taipei",
    na: function () {
      let k = () => console.log(this);
      k();
    },
  },
};

f.e.na();
