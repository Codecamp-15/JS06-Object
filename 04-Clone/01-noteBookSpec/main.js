// ให้สร้าง Object ที่มี key และ value เหมือน notebook โดยวิธี for ... in loop และ Object.assign
// ```js
// const notebook = {
//   brand: 'ASUS',
//   model: 'Vivobook D413IA-EB303TS',
//   processor: 'AMD Ryzen 7 4700U 3.6GHz',
//   graphics: 'Integrated Graphics : AMD Radeon Graphics',
//   ram: '8GB DDR4 Onboard',
//   storage: '512GB PCIe NVMe M.2 SSD'
// };

const notebook = {
  brand: "ASUS",
  model: "Vivobook D413IA-EB303TS",
  processor: "AMD Ryzen 7 4700U 3.6GHz",
  graphics: "Integrated Graphics : AMD Radeon Graphics",
  ram: "8GB DDR4 Onboard",
  storage: "512GB PCIe NVMe M.2 SSD",
};

// using for...in loop
/*
const newNotebook ={};

for (let key in notebook) {
    newNotebook[key]= notebook[key];
};
console.log(newNotebook);
*/

//Using Object Assign
const newNotebook = {};
Object.assign(newNotebook, notebook);
console.log(newNotebook);
