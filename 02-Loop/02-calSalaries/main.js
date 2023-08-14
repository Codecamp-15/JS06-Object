// ให้คำนวณผลรวมของ salaries ใน object ที่มี property แบบด้านล่าง
// ถ้า object เป็น object ว่าง ให้ return ค่าผลรวมเป็น 0

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const sumSalaries = function (obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
};

console.log(sumSalaries(salaries));
