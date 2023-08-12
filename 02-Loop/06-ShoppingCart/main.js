// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์
// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด
// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

//////////////////////////////////////////////////////////////

const log = console.log;

///////////////////// Sub Program 1: Input/////////////////////

// let name = "Hermes";
// let quantity = 10;
// let price = 500_000;
// let discount = 0.1; //10%

let name = prompt("Enter product name");
let quantity = prompt("Enter quantity");
let price = prompt("Enter price");
let discount = prompt("Enter discount") * 1;

///////////////////// Sub Program 2: Create Object /////////////////////

//////// Version 1 ////////

// const products = {
//   name: name, // key name: "Hermes"
//   quantity: quantity, // key quantity: 20
//   price: price, // key price: 500_000
//   discount: discount, // key discount: 0.1
// };

// ***** เมื่อชื่อ key ตรงกับชื่อตัวแปรที่เก็บ value >>> สามารถยุบ syntax ได้ === เรียกว่า Property Shorthand ******

//////// Version 2 ////////

const products = {
  name,
  quantity,
  price,
  //   discount,
};

if (discount != 0) {
  products[discount] = discount;
  // obj products[key discount] = value of discount variable
} // ถ้าส่วนลดไม่เป็น 0 ค่อยไปสร้าง key discount & value discount ไว้ใน obj products

log(products);

///////////////////// Sub Program 3: Calculate Price /////////////////////

// คิดสิ่งที่ต้องมีก่อนสร้าง function
// discount 10%, pay 90%
// discount 0.1, pay 0.9
// - price, quantity, discount => TotalPrice

//////// Version 1 ////////

// function calcPrice(price, quantity, discount = 0) {
//   // default value discount ไว้ 0 กัน bug ถ้ามันเป็น undefined
//   let totalPrice = price * quantity * (1 - discount);
//   //           100 บาท *  10 ชิ้น * (1-0.8) => 800 บาทที่ต้องจ่าย
//   return totalPrice;
// }

// let result = calcPrice(products.price, products.quantity, products.discount);
// log(result);

//////// Version 2 ////////

function calcPrice(productsObj) {
  // ให้ user ส่งค่า products มา ทีี่มี obj
  let price = productsObj.price;
  let quantity = productsObj.quantity;
  let discount = productsObj.discount || 0;
  return price * quantity * (1 - discount);
}

let result = calcPrice(products);
// function calcPrice ({name, quantity, price, discount})

log(result);
