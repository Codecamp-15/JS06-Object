const log = console.log;

let calculator = {
  //   x: null,
  //   y: null,
  read() {
    // let num1 = prompt("Enter num1");
    this.x = +prompt("Enter num1"); // calculator.read(); >>>> calculator.x = +prompt()
    // let num2 = prompt("Enter num2");
    this.y = +prompt("Enter num2"); // calculator.read(); >>>> calculator.y = +prompt()
  },

  sum() {
    return this.x + this.y;
  },

  mul() {
    return this.x * this.y;
  },
};
log(calculator);

calculator.read();
// calculator.x = +prompt()
// calculator.y = +prompt()
log(calculator);
log(calculator.sum());
log(calculator.mul());
