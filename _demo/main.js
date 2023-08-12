////////////////////////////
/////// FUNCTION ///////////
////////////////////////////

// FN Declaration
function add(x, y) {
  return x + y;
}

// FN Expression
const minus = function (x, y) {
  return x - y;
};

// FN Expression (Arrow)
const multiply = (x, y) => x * y;
const log = console.log; // => log = FN >> แบบนี้คือถูก
// xxx ผิด xxx const log = console.log(); // => แบบนี้คือเอาผลลัพธ์ของ console.log มาใช้ >> log = undefined (FN Result) >>> ผิด

log(add(5, 2)); // undefined()
// console.log(multiply(5,2));

////////////////////////////
//////// OBJECT/////////////
////////////////////////////

const user = {
  name: "John",
  age: 33,
  isMarried: false,
  address: {
    village: "Ladda Land",
    province: "Chiang Mai",
  },
};

// GET DATA
log(user.name); // John
log(user["name"]); // John

let a = "name";
log(user.a); // มันจะพยายามวิ่งไปหา key ที่ชื่อ a ใน obj user => undefined
log(user[a]); // John มันจะ process ก่อนว่า a คืออะไร = user ["name"] = John

/*** เมื่อไหร่ก็ตามที่ชื่อ key อยู่ในตัวแปร ต้อง process ผ่าน bracket [ ] ***/

// DELETE

// delete user.isMarried;
log(user);
// delete user["age"];
log(user);

let b = "address";
// delete user[b]; // delete key ที่ b เก็บไว้อยู่ ใน obj user
log(user);

// UPDATE

let x = 5;
x = x + 2; // container เก็บตัวแปร = value + 2

user.age = user.age + 1; // อายุ John จาก 32 เป็น 33
// container = value + 1
user.age += 1;
log(user.age); // 35

user["age"] = user["age"] + 5;
log(user.age); // 40

user["age"] += 5;
log(user.age); // 45

user["age"]++;
log(user.age); // 46

// Use key variable

let key = "age";
// เรียกว่า Computed Key
// ต้องทำการประมวลผลก่อนที่จะอ่านเสร็จสิ้น >> ต้องอ่าน key ก่อน แล้วไปเอา value ใน obj user ที่อยู่ใน age
user[key] = user[key] + 2; // คล้ายๆ บรรทัดที่ 68 เลย
// user["age"] = user"age" + 2
// ห้ามดูตรงๆ แต่ต้องดูว่า key นี้เก็บค่าอะไรไว้อยู่
// เอาค่าใน obj user ใน field key
user[key] += 1;
user[key]++;
log(user.key);
log(user.age);

// ***** Critical Point *****
// - Bracket notation ใช้กับ key ที่เป็น string หรือตัวแปรที่เก็บ string
// - for(<key> in <obj>) ในทุกรอบ obj เหมือนเดิม แต่ js จะ auto reassign key ใหม่ให้ทุกรอบ (string)
// - obj[key] = obj[key] + new => container = value + new
