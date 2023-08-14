// ให้เขียนโค้ดเพื่อรับค่าจากผู้ใช้งาน 3 ค่า และเก็บไว้ในตัวแปร username, email และ password
// ให้สร้าง object user ที่มี property 3 อันคือ username, email และ password โดยให้แต่ละ property มีค่าตามตัวแปรที่รับมา

let userName = prompt("Enter Username");
let userEmail = prompt("Enter Email");
let userPassword = prompt("Enter Password");

const USER = {
  username: userName,
  email: userEmail,
  password: userPassword,
};

console.log(USER.username);
console.log(USER.email);
console.log(USER.password);
