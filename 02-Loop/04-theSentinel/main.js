// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ถึงหยุด
// และให้นำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น log object นั้นออกมา

const obj = {
  name: "Time",
  age: 23,
  gender: "male",
  stop: "stop",
  adress: "Bangkok",
  phone: "099-131-7117",
};

const beforeStop = function (obj) {
  let newObj = {};
  for (let key in obj) {
    if (key === "stop") break;
    newObj[key] = obj[key];
  }
  return newObj;
};

console.log(beforeStop(obj));
