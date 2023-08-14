function Developer() {
  // 1. {}
  // 2. this = {}
  this.name; // {}.name = name
  this.age; // {}.age = age
  this.role = "dev"; // {}.role = 'dev'
  this.salary = 40_000;
  this.dev = function () {
    console.log("I'm developing something");
  };
  // 3. __proto__
  // 4. return {name:name,age:age,role:'dev,...(+property __proto__)}
}

// this == dev
// this == Instance (ตัววที่ถูกสร้างใหม่)
const dev = new Developer("Time", 23);
console.log(dev);
