// ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object  
// คูณเฉพาะ value ที่เป็น number เท่านั้น



// before 
let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};
// console.log(typeof(menu.width)=='number')
function isEmptyObj(obj){
    let isEmpty =true;

    for (let key in obj){
        isEmpty = false;
    }
    return isEmpty;
}

function multiplyNumeric(obj, num){
    //1. Validate empty object
    if(isEmptyObj(obj)) return 0;
    //2. Calculate
    for (const key in obj) {
        if (typeof(obj[key])=='number') {
            obj[key]*=num;
        }
    }

}

multiplyNumeric(menu, 3)
console.log(menu)

// after call function multiplyNumeric(menu, 3)
// menu = {
//   width: 600,
//   height: 900,
//   title: 'My menu'
// };