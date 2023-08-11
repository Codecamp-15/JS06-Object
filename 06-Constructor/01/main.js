// ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

function Calculator() {
  this.input1;
  this.input2;
}

Calculator.prototype.read = function (input1, input2) {
  this.input1 = input1;
  this.input2 = input2;
  console.log(this.input1, this.input2);
};

Calculator.prototype.sum = function () {
  return this.input1 + this.input2;
};
Calculator.prototype.mul = function () {
  return this.input1 * this.input2;
};

const cal = new Calculator();
const input1 = +prompt("input1");
const input2 = +prompt("input2");
cal.read(input1, input2);
cal.sum();
cal.mul();
