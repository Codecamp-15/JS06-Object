// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ถึงหยุด
// และให้นำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น log object นั้นออกมา

const STOP = "stop";
let object;
let keyInput;
let valueInput;

do {
  keyInput = prompt("Enter key");
  valueInput = prompt("Enter value");

  let object = {
    keyInput,
    valueInput,
  };

  if (keyInput === STOP || valueInput === STOP) {
    break;
  } else {
    // for (let key in object) {
    //   console.log(object[key]);
    // }

    console.log(object);
  }
} while (keyInput !== STOP || valueInput === STOP);

// const STOP = "stop";
// let keyInput;
// let valueInput;

// do {
//   let object = {
//     keyInput: prompt("Enter key"),
//     valueInput: prompt("Enter value"),
//   };

//   if (keyInput !== STOP || valueInput !== STOP) {
//     for (let key in object) {
//       console.log(object[key]);
//     }
//   } else {
//     break;
//   }
// } while (keyInput !== STOP || valueInput !== STOP);
