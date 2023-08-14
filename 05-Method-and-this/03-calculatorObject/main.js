// - ให้สร้าง Object calculator ซึ่งมี 3 method 
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง


let calculator = {
    read: function(){
        this.x=+prompt('Enter x');
        this.y=+prompt('Enter y');
    },
    sum(){
        return this.x + this.y;
    },
    mul(){
        return this.x * this.y;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
