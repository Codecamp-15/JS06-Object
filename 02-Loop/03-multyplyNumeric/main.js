/*
ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object  
คูณเฉพาะ value ที่เป็น number เท่านั้น

// before 
let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};

// after call function multiplyNumeric(menu, 3)
menu = {
  width: 600,
  height: 900,
  title: 'My menu'
};
*/

// ##########################################
// function multiplyNumeric(obj, num) {

//     for (let key in obj) {
//         if (!isNaN(obj[key])) {
//             //console.log(obj[key])
//             obj[key] = obj[key] * num;
//             //console.log(obj[key])
//         }

//     }
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: 'My menu'
// };

// multiplyNumeric(menu, 3);
// console.log(menu);
// ##########################################

const multiplyNumeric = (object, num) => {
    for (let key in object) {
        let value = object[key];
        if (typeof value === 'number') {
            // object[key] = object[key]*num
            object[key] *= num
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
};

multiplyNumeric(menu, 10);
console.log(menu);


// ###############################
let menuObj = {
    width: 200
}
// loop แต่ละรอบทำงานแบบนี้ไล่ไปเรื่อย ๆ
menuObj['width'] = menuObj['width'] * 2;
//
console.log(menuObj);