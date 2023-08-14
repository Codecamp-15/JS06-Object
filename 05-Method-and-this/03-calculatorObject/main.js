// - ให้สร้าง Object calculator ซึ่งมี 3 method
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

// ```js
// let calculator = {
//   // ... your code ...
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
// ```

let calculator = {
  x: null,
  y: null,
  read: function () {
    this.x = +prompt("Enter number1");
    this.y = +prompt("Enter number2");
  },
  sum: function () {
    return this.x + this.y;
  },

  mul: function () {
    return this.x * this.y;
  },
};
calculator.calculator.read();
alert(calculator.sum());
alert(calculator.mul());
