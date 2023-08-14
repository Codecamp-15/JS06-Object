const user = {
    firstName: 'Codecamp',
    lastName: 'Software Park',
    age: 15,
};

// firstName in user; //true
// age in user; //true
// phone in user; //false

// For IN : Loop through Object
// for (let <key_variable> in <obj>) {}

for (let key in user) {
    console.log(key)
    //1st : let key = 'firstName'
    //2nd : let key = 'lastName'
    //3th : let key = 'age'

    console.log(user[key]); //ห้ามมมมมม ใช้ Dot
    //1st : user[key] == user['firstName'] ==> Codecamp 
    //2nd : user[key] == user['lastName'] ==> Software Park
    //3th : user[key] == user['age'] ==> 15

    console.log(user.key); // auto dynamic assign by JS in <string> 
    //1st : user.key == user['key] ==> undefined
    //2nd : user.key == user['key] ==> undefined
    //3th : user.key == user['key] ==> undefined
}

// ## Noted ##
// console.log(user[key]);
// วิ่งไปหา field ชื่อ key
// วิ่งไปหาว่า key เก็บอะไรไว้ => ณ ที่นี้ key เก็บ 'firstName'
// วิ่งไปหา key (key-value) ว่า value pair มีค่าอะไร

// ## Critical Point ##
// - bracket notation ใช้กับคีย์ที่เป็น string หรือ ตัวแปรที่เก็บ string 
// - for( <key> in <obj> ) ๋JS จะ auto reassign key ใหม่ให้ทุกรอบ (string)
// - obj[key] = obj[key] + new => container = value + new