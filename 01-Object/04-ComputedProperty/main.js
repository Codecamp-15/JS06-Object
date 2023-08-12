// let inputUsername = prompt("Enter username");
// let inputEmail = prompt("Enter email");
// let inputPassword = prompt("Enter password");

// let user = {
//   username: inputUsername,
//   email: inputEmail,
//   password: inputPassword,
// };

let username = prompt("Enter username");
let email = prompt("Enter email");
let password = prompt("Enter password");

// let user = {
//   username: username,
//   email: email,
//   password: password,
// };

// property shorthand
// สามารถทำได้เมื่อชื่อ key ตรงกับชื่อตัวแปรใน value

let user = {
  username, // value in username variable
  email,
  password,
};
console.log(user);
