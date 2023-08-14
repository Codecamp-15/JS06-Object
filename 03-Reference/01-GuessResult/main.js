const product1 = { name: "Coke", price: 18, size: "500mL" };

const product2 = product1;
// { name: "Coke", price: 18, size: "500mL" }

product2.name = "Pepsi";
// { name: "Pepsi", price: 18, size: "500mL" }

product2.price = 19;
// { name: "Pepsi", price: 19, size: "500mL" }

console.log(product1); // *
// { name: "Pepsi", price: 19, size: "500mL" }

console.log(product2); // **
// { name: "Pepsi", price: 19, size: "500mL" }

console.log(product1 === product2); // ***
// true เพราะเป็น copied by reference = product1 & product2 มี address บ้านเลขที่เดียวกัน
