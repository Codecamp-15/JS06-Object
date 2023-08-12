console.log("learn object");

// DataTypes
// - Primitive: Boolean, Number, String, etc..
// - Non-Primitive: Object

/*
function add () {
    // Function Scope
    if(true) {
        // Block Scope
    }
}
*/

// ############################
// ## 1. Object Declaration ###
// ############################

// {} == stands for Object/ Scope
// { record_1, record_2, record_3,.... }
// each record syntax >> <key_name>: <value>
// <value> Datatype: any datatype
// <key_name> Datatype: string
// record === property (คุณสมบัติ, สิ่งที่มี) == key-value pair

// let user = {
//   firstName: "Mai",
//   lastName: "Terd",
// }; // object นี้มี 2 records/ 2 properties

let user = {
  firstName: "Mai",
  lastName: "T.",
  age: 28,
  isAdmin: true,
  3: true,
  "like human": true, // แบบนี้ใช้ได้ แต่ถ้าไม่มี quote และเป็นแค่ like human มันจะพัง แต่ก็ไม่ควรใช้เป็นช่องว่าง
};

// ############################
// # 2. Access, Modify, Delete #
// ############################

// Every action NEEDS <KEY_NAME> !!!!!
// Dot Notation (สัญลักษณ์ที่ใช้การ dot) >> <obj>.<key_name> ==== <value>
// ถ้าไม่มี record >> return undefined
// ข้อจำกัด: เข้าถึง key ที่มี space ไม่ได้

// GET/POLL/ READ = ดึงข้อมูลมา
// console.log(user);
// console.log(user.firstName); // Mai
// console.log(user.firstName === "Mai"); // true
// console.log(user.lastName);
// console.log(user.age);
// console.log(user.isAdmin);
// console.log(user.salary);
// console.log(user.like human);

// MODIFY/ UPDATE
// Syntax: <obj>.<old_key> = newValue
user.firstName = "Harry";
user.age += 2;
user.age++;
// console.log(user.age);

// ADD
// Syntax: <obj>.<new_key> = newValue
user.address = "Bangkok";
console.log(user);

// DELETE (delete kw)
// Syntax: delete <obj>.<key_name>
delete user.isAdmin;
console.log(user);

// ############################
// #### 3. Nested Object ######
// ############################

const employee = {
  fullName: "John Wick",
  salary: 500_000,
  address: {
    district: "Phaya Thai",
    province: "Bangkok",
    country: "Thailand",
  }, // key address มี value เป็น object
};

/////// ACCESS, MODIFY, DELETE ///////
console.log(employee.salary);
console.log(employee.address); // ได้สามค่าของ key ย่อย ที่อยู่ใน key address
console.log(employee.address.province); // Bangkok
console.log(employee.address.villa); // undefined

employee.address.province = "Nontaburi";
delete employee.address.country;

/////// PREVENT CASH ///////
// Dot ใช้กับ Object เท่านั้น !!
// ห้ามมมมมมมมมมมมมใช้กับ undefined >>> <undefined>.<key> = ERROR
console.log(employee.addr); // object.addr = return undefined

// console.log(employee.addr.province); // undefined.province = return ERRORRRRRRRRR

// ห้ามมมมมมมมมมมมมใช้กับ undefined >>> <undefined>.<key> = ERROR
// วิธีแก้คือ Optional Chaining => ถามมันว่า dot ต่อได้ไหม >>> <undefined>?.<key>
console.log(employee.addr?.province); // ถ้ามี ? คือไม่พัง เพราะให้มันช่วยเช็คให้ว่าตัวข้างหน้าเรา สามารถ dot ต่อได้ไหม ถ้าต่อได้ มันจะต่อให้ มันจะเช็คข้างหน้าว่าเป็น obj หรือเปล่า ไม่สนใจว่าข้างหลังเรามีหรือไม่มี // undefined
console.log(employee.address?.province); // Bangkok
console.log(employee.address?.village); // undefined

// ############################
// ###### 4. Check Key ? ######
// ############################

const product = {
  id: 227,
  name: "iPhone",
  price: 50_000,
  "is mobile": true,
  // discount: 0.05,
};

console.log(product.discount); // undefined

// IN Operator
// Syntax: <key_name_string> in <obj> => Boolean
// "name" in product // true/false
// เอาไว้ถามว่ามี string ใดๆ ใน object นั้นไหม

console.log("name" in product); //true
console.log("discount" in product); //false
// ===
// method hasOwnProperty
// Syntax: <obj>.hasOwnProperty(<key_name>) => Boolean
console.log(product.hasOwnProperty("name")); //true
console.log(product.hasOwnProperty("discount")); //false

// ############################
// ## 5. Bracket Notation [] ##
// ############################

product.id;
product["id"]; //ถูกออกแบบมาเพื่อแก้ไขบางปัญหา เช่น เพื่อเข้าถึง key "like human" เป็นต้น

// Syntax: <obj>["<key_name_string>"]
// *** 1. ใช้ bracket เมื่อไหร่ ชื่อ key ข้างในต้องเป็น string
// *** 2. ถ้าไม่ใช่ string ต้องเป็นตัวแปรที่เก็บ string // computed key
// Access key-value ผ่านชื่อตัวแปรได้

console.log(product.id);
console.log(product["id"]);

//console.log(product.is mobile) // CRASHHHHH
console.group(product["is mobile"]);

product["name"] = "iphone-15";
console.log(product); // name ถูกเปลี่ยนค่าไปแล้ว จาก iphone เป็น iphone-15

let aaaaa = "name"; // ตัวแปร aaaaa เก็บ string คำว่า name
console.log(product[aaaaa]); // iphone-15 // แปลว่า obj product ที่มีค่า string ที่ aaaa เก็บไว้ = เรียกว่า computed key
console.log(product["name"]); // iphone-15 //
console.log(product.aaaaa); // undefined เพราะไม่มีชื่อ key นั้นอยู่ จะต้องเป็นชื่อ key 100% // product.aaaaa === product["aaaaa"] === undefined

// ############################
// ## 6. Property Shorthand ###
// ############################

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
