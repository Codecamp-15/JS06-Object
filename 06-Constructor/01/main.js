// ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

function calculator() {
    // constructor() {...},
    
    this.read = function (x, y) {
        this.x = x;
        this.y = y;
    };
    this.sum = function () {
        return this.x + this.y;
    };
    this.mul = function () {
        return this.x * this.y;
    };
}

const cal = new calculator();
// console.log(cal);
cal.read(5, 4);
console.log(cal.sum());
console.log(cal.mul());