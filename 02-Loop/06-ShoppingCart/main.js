// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์
// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด
// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

const calcPrice = function (obj) {
  let netPrice =
    obj.amount * obj.pricePerProd -
    ((obj.amount * obj.pricePerProd * obj.discount) / 100 || 0);
  return netPrice;
};

const prodName = prompt("Enter name");
const amount = +prompt("Enter amount");
const pricePerProd = +prompt("Enter price per product");
const discount = +prompt("Enter discount in percent");
let obj;

if (isNaN(amount) || isNaN(pricePerProd)) alert("Please enter number");
else {
  if (discount === 0 || isNaN(discount)) {
    obj = { prodName, amount, pricePerProd };
  } else {
    obj = { prodName, amount, pricePerProd, discount };
  }
}

console.log(calcPrice(obj));
