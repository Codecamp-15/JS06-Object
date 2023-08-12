// ให้สร้างฟังก์ชันเพื่อตรวจสอบ object ว่าเป็น object ว่างหรือไม่
// ถ้า object มี property อย่างน้อยหนึ่งแสดงว่าไม่ใช่ object ว่าง

// 1. จะรับ input อะไรดี
// Object => BOOL
function isEmptyObj(obj) {
  let isEmpty = true;

  for (let key in obj) {
    isEmpty = false;
    //   console.log(key);
  }
  return isEmpty;
}

console.log(isEmptyObj({ age: 12 }));

// const a = {
//   name: "CC",
// };

// เมื่อไหร่ก็ตามที่คุณมี obj = จะ loop ได้ = ไม่ใช่ obj ว่าง
