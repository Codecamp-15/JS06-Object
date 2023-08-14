console.log('learn object');

// DataTypes
// - Primitive : Boolean, Number, String, etc...
// - Non-Primitive : Object

// #########################
// ## Object Declaration
// #########################
// {} == stand for Object / Scope 
// { record_1 , record_2 , record_3 , ... }
// each record => <key_name> : <value>
// <value> any Datatype
// <key_name> Datatype : string
// record === property (คุณสมบัติ, สิ่งที่มี) == ket-value pair

let user = {
    firstName: 'Kasama',
    lastName: 'Lee',
    age: 25,
    isAdmin: true,
    'like human': true,
};

console.log();


// #########################
// ## ACCESS, MODIFY, DELETE
// #########################

// Every action NEED <KEY_NAME> !!
// Dot Notation 
// <object>.<key_name> === <value>
// ถ้าไม่มี record => return undefined
// ข้อจำกัด : เข้าถึง key ที่มี space ไม่ได้

// # GET, POLL, READ
// console.log(user);
// console.log(user.firstName == 'Kasama');

// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.age);
// console.log(user.isAdmin);
// console.log(user.like human);

// MODIFY, UPDATE
// Syntax : <obj>.<key_name> = newValue
user.firstName = 'Masao';
user.age = 35;
user.age += 2;
user.age++;
// console.log(user++);

// # ADD
user.address = 'bangkok';
// console.log(user);

// DELETE 
// Syntax : delete <obj>.<key_name>

delete user.isAdmin
// console.log(user);

// #########################
// ## NESTED Object
// #########################

const employee = {
    fullName: 'John Doe',
    salary: 500_000,
    address: {
        district: 'Phaya Thai',
        province: 'Bangkok',
        country: 'Thailand',
    },
};

// #ACCESS, MODIFY, DELETE
// console.log(employee.salary); //500000
// console.log(employee.address); //{ district: 'Phaya Thai', province: 'Bangkok', country: 'Thailand' }
// console.log(employee.address.province); //Bangkok
// console.log(employee.address.district); //Phaya Thai
// console.log(employee.address.village); //undefined

employee.address.province = 'Nonthaburian'
delete employee.address.country;

// Prevent Crash !!
// Dot ใช้กับ Object เท่านั้น !! <obj>.<key>
// ห้ามมมมมมมมม ใช้กับ undefined <undefined>.<key>
// วิธีแก้ optional chaining => <undefined>?.<key>

// console.log(employee.addr); //undefined
// // console.log(employee.addr.province); //undefined.province //cannot read properties of undefined
// console.log(employee.addr?.province);  //undefined //? เป็นการใส่เพื่อถามว่ามี addr ไหม
// console.log(employee.address?.province);  // Bangkok //เป็นการเช็คว่า employee.address สามารถ .ต่อได้ไหม
// console.log(employee.address?.village);  // Bangkok //เป็นการเช็คว่า employee.address สามารถ dot ต่อได้ไหม //ถ้าไม่ใส่มันจะ error จ้าา ตู้มมมม


// #########################
// ## 4. Check key ?
// #########################

const product = {
    id: 227,
    name: 'Iphone',
    price: 50_000,
    // discount: 0.05,
};
console.log(product.discount); //undefined

// IN Operator
//Syntax

// 'name' in product // => true, false
// Syntax : <key_name_string> in <obj> =>
console.log('name' in product);
console.log('discount' in product);

// Syntax : <obj>.hasOwnProperty(<key_name>) => BOOL
console.log(product.hasOwnProperty('name'));
console.log(product.hasOwnProperty('discount'));


// #########################
// ## 5. Bracket Notation []
// #########################

// Syntax : <obj>[ '<key_name_string>' ]
// **** 1. ใช้ Bracket เมื่อไหร่ ชื่อ key ข้างในต้องเป็น string
// **** 2. ถ้าไม่ใช่ string ต้องเป็นตัวแปรที่เก็บ string  //Computed key
// Access key-value ผ่านชื่อตัวแปรได้
console.log(product.id);
console.log(product['id']);

// console.log(product.is moblie) //crash
console.log(product['is mobile']);

product['name'] = 'Iphone-15';
// console.log(product);

let aaa = 'name';

console.log(product['name'])
console.log(product[aaa])
console.log(product.aaa) // product.aaa == product['aaa']


// #########################
// ## 6. Property Shorthand
// #########################
let username = 'Codecamp';
let age = 15;
let USER = {username, age};
console.log(USER);