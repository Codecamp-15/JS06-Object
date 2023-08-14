/*
const product = {};

let key;
let value;

for (let i = 1; i <=4 ; i++) {
    key = prompt('Enter ');
    value = prompt('Enter ');
    if (value == 0) {
        return;
    }
    product[key] = value; 
}

// จน * ราคา * 1-(ส่วนลด/100)
let productPrice = (object) => {
    let price;
    for (let key in Object) {
        if (key === 'discount') key /= 100;
        price *= object[key];
    }
    return price;
};
*/

// ####################################################
// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์  
// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด  
// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

// Sub Program-1 : Input
let name = prompt('Enter Product Name');
let quantity = +prompt('Enter Quantity');
let price = Number(prompt('Enter Price'));
let discount = prompt('Enter Discount') * 1;

// Sub Program-2 : Create Object
// const product = {
//     name: name, // name: 'Hermes'
//     quantity: quantity, //quantity: 20
//     price: price, // price: 500_000
//     discount: discount, // discount: 0.1
// }

// เมื่อชื่อ key ตรงกับชื่อตัวแปรที่เก็บ value สามารถยุบ Syntax (Property shorthand)
const products = {
    name,
    quantity,
    price,
    // discount,
}
// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง 
if (discount != 0) {
    products['discount'] = discount;
}

console.log(products)

// Sub Program-3 : Calculate Price
// price, quantity, discount => TotalPrice

// function calcPrice (price, quantity, discount) {
//     let totalPrice = price * quantity * (1-discount);
//     return totalPrice;
// }

// let result = calcPrice(products.price, products.quantity, products.discount)
// console.log(result);

function calcPrice(productObj) {
    let price = productObj.price;
    let quantity = productObj.quantity;
    let discount = productObj.discount ? productObj.discount : 0;
    return price * quantity * (1 - discount);
}

let result = calcPrice(products);
// let result = calcPrice({name, quantity, price, discount,});

console.log(result);