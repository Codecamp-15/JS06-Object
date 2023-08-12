// ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object
// คูณเฉพาะ value ที่เป็น number เท่านั้น

// // before
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu'
// };

// // after call function multiplyNumeric(menu, 3)
// menu = {
//   width: 600,
//   height: 900,
//   title: 'My menu'
// };

const multiplyNumeric = (object, num) => {
  for (let key in object) {
    // console.log(key);

    let value = object[key];
    if (typeof value === "number") {
      //   console.log(value, num);
      //   update value

      object[key] = object[key] * num;
      // object[key] *= num
      // object[key] = value * num

      //   menu["width"] = 200 * 3
      //   menu["height"] = 300 * 3
    }
  }
};

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu, 3);

console.log(menu);

/////////////////
//// หรืออีกวิธี/////
/////////////////

let menuObj = {
  width: 200,
};

menuObj.width = menuObj.width * 2;
menuObj["width"] = menuObj["width"] * 2;

let key = "width";

menuObj[key] = menuObj[key] * 2;
console.log(menuObj);
