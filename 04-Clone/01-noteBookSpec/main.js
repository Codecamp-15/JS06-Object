const notebook = {
  brand: "ASUS",
  model: "Vivobook D413IA-EB303TS",
  processor: "AMD Ryzen 7 4700U 3.6GHz",
  graphics: "Integrated Graphics : AMD Radeon Graphics",
  ram: "8GB DDR4 Onboard",
  storage: "512GB PCIe NVMe M.2 SSD",
};

const copiedNotebook1 = {};

for (const key in notebook) {
  copiedNotebook1[key] = notebook[key];
}

const copiedNotebook2 = Object.assign({}, notebook);

console.log(copiedNotebook1);
console.log(copiedNotebook1 === notebook);
console.log(copiedNotebook2);
console.log(copiedNotebook2 === notebook);
