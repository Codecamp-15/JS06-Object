// ให้สร้าง Constructor Function: Accumulator(startingValue) 
// - มี property ชื่อ currentValue ไว้เก็บค่าสะสม (มีค่าเท่ากับ startingValue ตอน Object ถูกสร้าง)
// -  มี method  read() ให้รับค่า input และให้บวกเข้ากับค่า currentValue
// -  มี method  show() ให้ alert ค่า currentValue

// const testacc={
//     currentValue: 0,
//     read(){
//         inputNum= +prompt('Enter number');
//         this.currentValue+= inputNum;
//     },
//     show(){
//         alert(this.currentValue);
//     }
// };

function Accumulator(){
    this.currentValue = 0;
    this.read =function(){
        inputNum= +prompt('Enter number');
        this.currentValue+= inputNum;
    };
    this.show =function(){
        alert(this.currentValue);
    }
}

const acc = new Accumulator();


