// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง
// โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number)
// โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย

const fruitBaskets = function (fruits) {
  for (let key in fruits) {
    if (fruits[key] > 1) {
      fruits[key + "s"] = fruits[key];
      delete fruits[key];
    }
  }
};

const basket = {
  apple: 1,
  cherry: 3,
  banana: 2,
  watermelon: 1,
};

fruitBaskets(basket);

console.log(basket);
