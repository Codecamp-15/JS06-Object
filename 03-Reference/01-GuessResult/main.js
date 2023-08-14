// บรรทัดที่มี * , ** , *** ให้ผลลัพธ์เป็นอะไร เพราะอะไร



const product1 = { name: 'Coke', price: 18, size: '500mL' };

const product2 = product1;
product2.name = 'Pepsi';
product2.price = 19;

console.log(product1); // *
// { name: 'Pepsi', price: 19, size: '500mL' }
// เพราะทั้ง product1 และ product2 มี reference เดียวกัน

console.log(product2); // **
// { name: 'Pepsi', price: 19, size: '500mL' }
// เพราะทั้ง product1 และ product2 มี reference เดียวกัน

console.log(product1 === product2); // ***
// true
// เพราะทั้ง product1 และ product2 มี reference Address เดียวกัน (ชี้ไปที่ Address บนแรม ณ จุดเดียวกัน)
