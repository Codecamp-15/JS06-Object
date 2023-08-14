// ให้คำนวณผลรวมของ salaries ใน object ที่มี property แบบด้านล่าง
// ถ้า object เป็น object ว่าง ให้ return ค่าผลรวมเป็น 0

// let salaries = {
//   //   John: 100,
//   //   Ann: 160,
//   //   Pete: 130,
// };

function isEmptyObj(obj) {
  let isEmpty = true;
  for (let key in obj) {
    isEmpty = false;
  }
  return isEmpty;
}
// (Obj) => Number
function calSalaries(object) {
  // 1. Validate ว่า object ค่าว่างมั้ย ถ้าผ่าน ก็ค่อย calculate => แยก Service
  if (isEmptyObj(object)) return 0;

  //   calSalaries({});
  // 2. Calculate
  let sum = 0;
  for (let key in object) {
    // <obj>.<key>
    // <obj>[key]
    // console.log(object[key]); // object["age"]
    sum += object[key];
  } // ทุกๆครั้งที่วน มันจะเอามาทบให้ sum เสมอ
  return sum;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let total = calSalaries(salaries);
console.log(total);
