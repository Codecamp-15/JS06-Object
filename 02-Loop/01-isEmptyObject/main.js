// ให้สร้างฟังก์ชันเพื่อตรวจสอบ object ว่าเป็น object ว่างหรือไม่
// ถ้า object มี property อย่างน้อยหนึ่งแสดงว่าไม่ใช่ object ว่าง

const isEmptyObject = function (obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  return count > 0 ? true : false;
};
console.log(isEmptyObject({}));
