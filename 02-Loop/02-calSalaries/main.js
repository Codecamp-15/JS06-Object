// ให้คำนวณผลรวมของ salaries ใน object ที่มี property แบบด้านล่าง
// ถ้า object เป็น object ว่าง ให้ return ค่าผลรวมเป็น 0

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// Calculate the sum of salaries in the object that has properties like the one below
// if the object is empty return the sum as 0;
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

//Input is Object but user could give empty object
function isEmptyObj(object) {
  let isEmpty = true;
  for (let key in object) {
    isEmpty = false;
  }
  return isEmpty;
}

function calSalaries(object) {
  //validate first
  if (isEmptyObj(object)) return 0;
  // calculate
  let sum = 0;
  for (let key in object) {
    console.log(object[key]);
    sum += object[key];
  }

  return sum;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let total = calSalaries(salaries);
console.log(total);
