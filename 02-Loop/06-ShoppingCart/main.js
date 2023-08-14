// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์
// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด
// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

// Sub Program 1 ; Input
// let itemName = "lululemon";
// let quantity = 20;
// let price = 500_000;
// let discount = 0.1;

//Sub Program 2: Create Object
// const product = {
//   itemName: itemName,
//   quantity: quantity,
//   price: price,
//   discount: discount,
// };

//whenever the name of the key is the same with variable name, you have merge the key and variable together
//we call it (property shorthand)

let itemName = "lululemon";
let quantity = 20;
let price = 500_000;
let discount = 0.1;

const product = {
  itemName,
  quantity,
  price,
  discount,
};
console.log(product);

//sub program 3 : Calculate Price

// create function to calculate the price

function calcPrice(price, quantity, discount) {
  let totalPrice = price * quantity * (1 - discount);
  return totalPrice;
}

let result = calcPrice(product.price, product.quantity, product.discount);
console.log(result);

console.log(calcPrice(product.price, product.quantity, product.discount));

//Can make it easier and more convineint for user

// function calcPrice(productObj) {
//   let price = productObj.price;
//   let quantity = productObj.quantity;
//   let discount = productObj.discount || 0;
//   return price * quantity * (1 - discount);
// }
