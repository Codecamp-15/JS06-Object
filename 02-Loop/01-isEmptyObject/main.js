// ให้สร้างฟังก์ชันเพื่อตรวจสอบ object ว่าเป็น object ว่างหรือไม่  
// ถ้า object มี property อย่างน้อยหนึ่งแสดงว่าไม่ใช่ object ว่าง

// object => boolen
function isEmptyObj(obj){
    let isEmpty =true;

    for (let key in obj){
        isEmpty = false;
    }
    return isEmpty;
}
const a= {
    name: 'CC',
    age: '15',
}
const b ={};
console.log(isEmptyObj(a));
console.log(isEmptyObj(b));