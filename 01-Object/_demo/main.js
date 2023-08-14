let user = {
  firstName: "Time",
  lastName: "Ruchutrakool",
  age: 23,
  isAdmin: true,
};

// Read / Get หรือ เรียกว่า Polling (Object.key || Object[key])
for (let key in user) {
  console.log(user[key]);
}

user.age = 24;
user.address = "Bangkok"; //! Add Key
delete user.isAdmin; //! Delete Key
console.log(user);

const employee = {
  fullName: "Time Ruchu",
  salary: 500_000,
  address: {
    district: "Bangrak",
    province: "Bangkok",
    country: "Thailand",
  },
};

console.log(employee.address.country);
// console.log(employee.addr.country) Error -> undefined.country
console.log(employee.addr?.country);

console.log("salary" in employee); //ตรวจสอบ key
console.log(employee.hasOwnProperty("salary"));
