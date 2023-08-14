// ให้เขียนโค้ดเพื่อรับค่าจากผู้ใช้งาน 3 ค่า และเก็บไว้ในตัวแปร username, email และ password
// ให้สร้าง object user ที่มี property 3 อันคือ username, email และ password โดยให้แต่ละ property มีค่าตามตัวแปรที่รับมา

// let username = prompt('Enter username: ');
// let email = prompt('Enter email: ');
// let password = +prompt('Enter password: ');

let username = 'john';
let email = 'doe';
let password = '1234';

// let USER = {
//     username: username,
//     email: email,
//     password: password,
// };
// console.log(USER);

// property shorthand
let USER = {username, email, password};
console.log(USER);  //{ username: 'john', email: 'doe', password: '1234' }