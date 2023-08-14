// ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

function Calculator(){
    this.read = function(){
        this.x=+prompt('Enter x');
        this.y=+prompt('Enter y');
    };
    this.sum=function (){
        return this.x+this.y
    };
    this.mul=function (){
        return this.x*this.y
    };
}
const cal1 = new Calculator();
const cal2 = new Calculator();
// console.log(cal1);
// console.log(cal2);
// cal1.read();
// alert(cal1.sum());
// alert(cal1.mul());