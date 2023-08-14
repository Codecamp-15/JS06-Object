// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ถึงหยุด
// และให้นำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น log object นั้นออกมา

let obj = {};
alert('Type stop when you have entered all products and values');

for (;;) {
  let userKey = prompt('Enter product');
  if (userKey == 'stop') break;
  let userValue = prompt('Enter price');
  if (userValue == 'stop') break;
  obj[userKey] = userValue; //
}

console.log(obj);
