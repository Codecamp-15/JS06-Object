// ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

function Calculator() {
  this.read = function () {
    this.num1 = +prompt("Enter a number"); // ใส่ this.num1 เพื่อให้เอาค่าไปใช้ต่อได้
    this.num2 = +prompt("Enter another number");
  };

  this.sum = function () {
    return this.num1 + this.num2;
  };

  this.mul = function () {
    return this.num1 * this.num2;
  };
}

const anotherCalculator = new Calculator();
anotherCalculator.read(); // 5, 6
console.log(anotherCalculator.sum()); // 11
console.log(anotherCalculator.mul()); // 30
