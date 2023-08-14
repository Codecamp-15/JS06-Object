// ให้สร้าง Constructor Function: Accumulator(startingValue)
// - มี property ชื่อ currentValue ไว้เก็บค่าสะสม (มีค่าเท่ากับ startingValue ตอน Object ถูกสร้าง)
// -  มี method  read() ให้รับค่า input และให้บวกเข้ากับค่า currentValue
// -  มี method  show() ให้ alert ค่า currentValue

///////////////////////////////////////////////////////////////////////////////////
// function Accumulator() {
//   this.currentValue = +prompt("Enter a number");
//   this.read = function () {
//     this.sum = +prompt("Enter another number") + this.currentValue;
//   };
//   this.show = function () {
//     this.totalSum = this.sum;
//     alert(this.totalSum);
//   };
// }

// const Accumulator2 = new Accumulator();
// Accumulator2.currentValue; // 10
// Accumulator2.read(); // 80
// Accumulator2.show(); // alert 90

///////////////////////////////////////////////////////////////////////////////////

function Accumulator(startingValue) {
  this.currentValue = startingValue;
  this.read = function () {
    let input = +prompt("Enter a number");
    this.currentValue += input;
  };
  this.show = function () {
    alert(this.currentValue);
  };
}

const Accumulator2 = new Accumulator(10);
Accumulator2.currentValue; // 10
Accumulator2.read(); // 80
Accumulator2.show(); // alert 90
