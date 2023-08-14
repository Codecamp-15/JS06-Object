// - ให้รับข้อมูลเป็นชื่อพนักงาน
// - หากมีพนักงานที่ชื่อตรงกับคีย์ในอ็อบเจ็คด้านล่างให้แสดงข้อความว่า Name: john, salary: 1000, address: Ratchathewi, Bangkok หากไม่มีชื่อแสดงข้อความว่า Not Found

const employees = {
  john: {
    salary: 1000,
    address: { district: "Ratchathewi", province: "Bangkok" },
  },
  peter: {
    salary: 1500,
    address: { district: "Pathumwan", province: "Bangkok" },
  },
  mike: {
    salary: 800,
    address: { district: "Pakkret", province: "Nonthaburi" },
  },
  sarah: {
    salary: 2200,
    address: { district: "Sriraja", province: "Chonburi" },
  },
};

let user = prompt("Enter your name");
if (employees.hasOwnProperty(user)) {
  let employee = employees[user];
  console.log(
    `Name: ${user} salary: ${employee.salary} address ${employee.address.district} ${employee.address.province}`
  );
}

// let user = prompt("Enter your name");

// if (user == "john") {
//   console.log(
//     `Name: john, salary: ${employees.john.salary}, address: ${employees.john.address.district} ${employees.john.address.province}`
//   );
// } else if (user == "peter") {
//   console.log(
//     `Name: peter, salary: ${employees.peter.salary}, address: ${employees.peter.address.district} ${employees.peter.address.province}`
//   );
// } else if (user === "mike") {
//   console.log(
//     `Name: mike, salary: ${employees.mike.salary}, address: ${employees.mike.address.district} ${employees.mike.address.province}`
//   );
// } else if (user === "sarah") {
//   console.log(
//     `Name: sarah, salary: ${employees.sarah.salary}, address: ${employees.sarah.address.district} ${employees.sarah.address.province}`
//   );
// } else {
//   console.log("Not Found");
// }
