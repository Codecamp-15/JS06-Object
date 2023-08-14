// console.log('learn object');

// DataTypes
// - Primitive : Boolean,Number,String etc...
// - Non-Primitive : Object

// ######################
// ### 1.Object Declaration
// ######################
// {} == stand for Object / Scope
// { record_1 , record_2 , record_3, ... }
// each record => <key_name>:<value>
// <value> any Datatype
// <key_name>  Datatype : string
// record === property (คุณสมบัติ,สิ่งที่มี) == key-value pair

let user = {
    'firstname' :'Natthaphong',
    'lastname': 'Sinsupharoek',
    'age': 25,
    'isAdmin': true,
    'like human': true,//should not do it.
}
console.log(user);

/*
##########################
##ACCESS, MODIFY, DELETE##
##########################

Every action NEED <key_name>!!
Dot notation <odject>.<key_name>===<Value>
ถ้าไม่มี record นั้น จะทำการ return เป็น undefined ดังนั้นระวังการพิมผิดให้ดี
ข้อจำกัด เข้าถึงkeyที่มีspace barไม่ได้
*/
// how to get,poll,read????
/*
console.log(user.firstname==='Natthaphong');
console.log(user.lastname);
console.log(user.age);
console.log(user.isAdmin);
// console.log(user.'like human'); //error
console.log(user.salary);//unfefined
*/
//how to modify,udpate?
//Syntax : <obj>.<old_key> =newValue
// user.firstname = 'Pravit';
// user.age = 18;
// user.age += 2;
// console.log (user.age);

//ADD
//Syntax : <obj>.<new_key> =newValue
// user.address ='bangkok';
// console.log(user);

//Delete
//Syntax : delete<obj>.<new_key>
// delete user.address;
// console.log(user);

/*
##########################
######Nested Object#######
##########################

*/
// const employee ={
//     fullname: "John Doe",
//     salary: 500_000,
//     address: {
//         district: 'Phaya Thai',
//         province: "Bangkok",
//         contry: 'Thailand'
//     }
// };
// console.log(employee.salary);
// console.log(employee.address);
// console.log(employee.address.district);
// console.log(employee.address.ville);//undefined

// employee.address.province = 'Nonthaburian';


//dot ใช้กับ objectเท่านั้น
//ห้ามมมมมมมมมมมมมม ใช้กับ undefined
//วิธีแก้ optional chaining => <undefined>?.<key>
// ? จะถามว่าสิ่งที่อยู่ข้างหน้ามันจะให้ dot ได้หรือไม่?

// console.log(employee.addr);//undefined
// // console.log(employee.add.province);//error เพราะ undefined.province dot use with object only(undefined isn't object)
// console.log(employee.add?.province);//undefined
// console.log(employee.address?.province);//Bankok

const product ={
    id: 227,
    name: 'iphone',
    price: 50_000,
    // discount: 0.05,
}
console.log(product.discount)//undefined


// IN Operator
// Syntax : <key_name_string> in <obj> => BOOL
console.log('name' in product);
console.log('discount' in product);

// method hasOwnProperty
// Syntax : <obj>.hasOwnProperty(<key_name>) => BOOL
console.log(product.hasOwnProperty('name'));
console.log(product.hasOwnProperty('discount'));

// ##################################
// ########## 5. Bracket Notation []
// ##################################

// Syntax : <obj>[ "<key_name_string>" ]
// *** 1 ใช้ bracket เมื่อไหร่ ชื่อ key ข้างในต้องเป็็น string
// *** 2 ถ้าไม่ใช่ string ต้องเป็นตัวแปรที่เก็บ string // Computed key
// Access key-value ผ่านชื่อตัวแปรได้

console.log(product.id);
console.log(product['id']);

// console.log(product.is mobile) crash
console.log(product['is mobile']);

product['name'] = 'Iphone-15';
// console.log(product);

let aaaaa = 'name';

console.log(product['name']);
console.log(product[aaaaa]);
console.log(product.aaaaa); //product.aaaaa  === product['aaaaa'] === undefined

// #############################
// ###### 6.Property ShortHand
// ############################
/*
{
	username : <value in username variable>,
	age : <value in age variable>
}
*/
let username = 'Codecamp';
let age = 15;

// let USER = {
//     username: username,
//     age: age,
// };
let USER = { username, age };

console.log(USER);