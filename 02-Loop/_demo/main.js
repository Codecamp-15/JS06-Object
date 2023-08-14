const user = {
  firstName: "Codecamp",
  lastName: "Software Park",
  age: 15,
};

// for (let..ชื่ออะไรก้ได้ แต่จะเปลี่ยนไปทุกๆครั้งที่ loop..in user หรือ obj ที่เราต้องการหา) {}

// "firstName" in user; //true
// "age" in user; //true
// "phone" in user; //false

// โครงสร้าง For IN: Loop through Object
// ไม่ว่า obj จะมีกี่ตัว เราก็ไม่ต้องแคร์
// for (let <key_variable> in <obj>) {}

for (let key in user) {
  // let key = "firstname"
  // let key = "lastName"
  // let key = "age"
  // JS assign ตัวแปรให้เราโดยอัตโนมัติในแต่ละรอบ

  console.log(key);
  //   console.log(user.key);
  // จะใช้ได้แค่กับ key ที่เป็น string เท่านั้น
  // auto dynamic assigned by JS
  // 1st loop: let key = "firstName"
  // 2nd loop: let key = "lastName"
  // 3rd loop: let key = "age"

  console.log(user[key]);
  // ต้องใช้ bracket ถึงจะเรียกได้
  // need to access by bracket
  // computed key
  // ถ้าอยากจะแก้ไข ต้องใช้ bracket
  // 1st loop: user[key] == user ["firstName"] => Codecamp
  // 2nd loop: user[key] == user ["lastName"] => Software Park
  // 3rd loop: user[key] == user ["age"] => 15

  console.log(user.key);
  // 1st : user.key == user["key"] => undefined
  // 2nd : user.key == user["key"] => undefined
  // 3rd : user.key == user["key"] => undefined
}
// ส่วนมากจะตั้งชื่อตัวแปรว่า key กัน
