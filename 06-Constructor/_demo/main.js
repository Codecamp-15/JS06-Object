const log = console.log;
log("Constructor Function");

const dev1 = {
  name: "john",
  age: 32,
  role: "dev",
  salary: 40_000,
  dev: function () {
    console.log("i develop some features");
  },
};

//Object Creators == Constructor Function //funtion name begin with BIG case

function Developer(name, age) {
  this.name = name; // {name:name}
  this.age = age; // {name: "Jane", age: 25}
  this.role = "dev"; // {name: "Jane", age: 25, role: 'dev'}
  (this.salary = 40_000),
    (this.dev = function () {
      console.log("i develop some feature");
    });
  //return {name....,dev:fn()} then give it to dev2
}

//this == dev2
//this == instance
const dev2 = new Developer("Jane", 25);
console.log(dev2);

const dev3 = new Developer("Kyle", 30);
console.log(dev3);
