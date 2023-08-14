//Object

// {} stand for Object / Scope
//{record01, record02, record02, ....}
// each record => <key_name> : <value>
// The <value> can be any datatype BUT the key name has to be string

// In each record, there is property e.i. one key is one property
let user = {
  firstName: "Panalee", //firstName is the key, Panalee is a value
  lastName: "Pierce",
  age: 50,
  isAdmin: true,
  "like human": true,
};

//###########################
//When accessing the object we can
// Modify, delete
//###########################

//Every action needs <key_name>
//You can use
//dot notation <obj>.<key_name>!!
//####Restriction for the NOTATION is it cant access the key_name that has space##########

//GET POLL, READ ONLY
console.log(user);
console.log(user.firstName);
console.log(user.firstName === "Panalee");
console.log(user.laststName === "Panalee");
console.log(user.age);
console.log(user.isAdmin === true);
console.log(user.lastName);

//What if you want to update or MODIFY your object value
//syntax : <obj>.<key_name> = New Valu;
user.firstName = "Pernille";
console.log(user.firstName);
user.age = 60;
user.age += 2;
user.age++;
console.log(user.age);

//ADD
user.address = "bangkok"; ////syntax : <obj>.<New_key_name> = 'Value;

//Delete //syntax : delete.<obj>.<key_name>;
delete user.isAdmin;
console.log(user);

//############
//###Nested Object
//############

const employee = {
  fullName: "John Doe",
  salary: 300_000,
  address: {
    district: "Phaya Thai",
    province: "Bangkok",
    country: "Thailand",
  },
};
console.log(employee.salary);
console.log(employee.address);
console.log(employee.address.province);
console.log(employee.address.district);
console.log(employee.address.village);

//Dot ONLY use with object !! <obj>.<key>
//Do not use undefined <undefied>.<key>
//How to solve : use optional chaining => <undefined>?.<key> ? ask if we can dot after
console.log(employee.addr);
// console.log(employee.addr.province)

console.log(employee.address?.province);
console.log(employee.address?.village);

///4. Check key

const product = {
  id: 225,
  name: "iPhone",
  price: 50_000,
  // discount: 0.05,
};
console.log(product.discount);

//The syntax to check console.log('keyname wrapped with quote' in <obj>) or
console.log("name" in product);
console.log(product.hasOwnProperty("discount"));

///5. Bracket Notation []
//Syntax <obj>['']
//Access key using a variale
console.log(product.id);
console.log(product["id"]);

product["name"] = "iPhone15";
console.log(product["name"]);
console.log(product.name);

///And you can assign key to a variable
let aaaa = "name";
console.log(product[aaaa]); //product as string that store in variable calles aaaaa
console.log(product.aaaa);

/// Loop
//Loop counting cant be used here

// const user = {
//   firstName : 'Codecamp',
//   lastName : 'Thailand',
//   age : 15,
// }

//For IN : use through Object
/*syntax for (let <key_variable> in <obj>) {

}
*/

const user = {
  firstName: "Codecamp",
  lastName: "Thailand",
  age: 15,
};
for (let key in user) {
  // let key = 'firstName'  --looking for user and string firstName
  // let key = 'lastName'
  // let key = 'age'
  console.log(key);
  console.log("\n");

  console.log(user[key]);
  console.log("\n");

  console.log(user.key);
  console.log("\n");
}

///// Review

const product = {
  id: 227,
  name: "IPhone",
  price: 50_000,
  // discount: 0.05,
  // 'is mobile': true,
};

// #1 Dot
// console.log(product.id);

// #2 Bracket[string]
// console.log(product['id']);

// #3 Bracket[variable_key]
let key = "id";
// console.log(product[key]);

// a variable ที่เก็บชื่อ key
// และเปลี่ยนใหม่ทุกครั้งที่ลูป
for (let a in product) {
  // 1st : let a = "id"
  // 2nd : let a = 'name'
  // 3rd : let a = 'price'
  // console.log(a)
  console.log(a, product[a]);
  product[a] = product[a] + 50; // oldvalue + update
}

product;
