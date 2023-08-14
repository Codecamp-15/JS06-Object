// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง
// โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number)
// โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย

//INIT

const TERMINATE = "stop";
const fruit = {};

// Accept Input
// let key = "apple";
// let value = 10;

let key;
let value;

do {
  key = prompt("Enter fruit");
  value = +prompt("Enter Quantity");

  if (value == 1) {
    fruit[key] = value; // computed key / dynamic key
  } else if (value > 1) {
    fruit[`${key}s`] = value;
  }
} while (key != TERMINATE && value != TERMINATE);

// Update Fruit
// fruit.key =value; // {key: 10} // ทำแบบนี้ไม่ได้
// fruit["apple"] = value // {apple: 10} // ทำไม่ได้เพราะไม่รู้ว่า user จะพิมพ์ apple หรือเปล่า

console.log(fruit);
