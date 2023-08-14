// ให้คำนวณผลรวมของ salaries ใน object ที่มี property แบบด้านล่าง
// ถ้า object เป็น object ว่าง ให้ return ค่าผลรวมเป็น 0


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function isEmptyObj(obj){
    let isEmpty =true;

    for (let key in obj){
        isEmpty = false;
    }
    return isEmpty;
}

//Obj => Number
function calSalaries(object){
    //1. Validate empty object =>แยก Service
    if(isEmptyObj(object)) return 0;
    //2. Calculate
    let sum=0;//ตั่งไว้ที่Global เพื่อเป็นตัวทด
    for (let key in object){
        // console.log(object[key])
        sum += object[key]
    }
    return sum;
}
let total = calSalaries(salaries);
console.log(total);