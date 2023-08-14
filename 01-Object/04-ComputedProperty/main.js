// let a=prompt('Enter username')
// let b=prompt('Enter email')
// let c=prompt('Enter password')
// const user ={
//     username: a,
//     email: b,
//     password: c,
// }
// console.log(user);

//we have property short hand ถ้าตัวแปรที่จะassighให้keyเป็นชื่อเดี่ยวกันเท่านั้น
let username=prompt('Enter username')
let email=prompt('Enter email')
let password=prompt('Enter password')
// const user ={
//     // username: username,
//     // email: email,
//     // password: password,
// }
// V1
// const user ={
//     username,
//     email,
//     password,
// }
// V2
const user ={username,email,password,}
console.log(user);