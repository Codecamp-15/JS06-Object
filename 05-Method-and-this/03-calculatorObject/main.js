// - ให้สร้าง Object calculator ซึ่งมี 3 method
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

// let calculator = {
//   read: function (input1, input2) {
//     this.input1 = input1;
//     this.input2 = input2;
//     console.log(this.input1, this.input2);
//   },
//   sum: function () {
//     return this.input1 + this.input2;
//   },
//   mul: function () {
//     return this.input1 * this.input2;
//   },
// };

// const a = +prompt("a");
// const b = +prompt("b");

// calculator.read(a, b);
// alert(calculator.sum());
// alert(calculator.mul());

let calculator = {
  read: function () {
    this.input1 = +prompt("input1");
    this.input2 = +prompt("input2");
    console.log(this.input1, this.input2);
  },
  sum: function () {
    return this.input1 + this.input2;
  },
  mul: function () {
    return this.input1 * this.input2;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
