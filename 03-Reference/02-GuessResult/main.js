const user = { name: "Jack", role: "ADMIN" };
const admin = { name: "Jack", role: "ADMIN" };

console.log(user === admin); // *
// false เพราะว่าเป็นการสร้าง object ใหม่ คนละ object กัน เหมือนบ้าน townhouse ที่หน้าตาเหมือนกันแต่เป็นบ้านคนละหลัง
// คนละ object == คนละ address
