const employees = {
  john: {
    salary: 1000,
    address: { district: 'Ratchathewi', province: 'Bangkok' },
  },
  peter: {
    salary: 1500,
    address: { district: 'Pathumwan', province: 'Bangkok' },
  },
  mike: {
    salary: 800,
    address: { district: 'Pakkret', province: 'Nonthaburi' },
  },
  sarah: {
    salary: 2200,
    address: { district: 'Sriraja', province: 'Chonburi' },
  },
};

let employeeName = prompt('Enter Your Name');

for (const name in employees) {
  if (name == employeeName) {
    let message = `Address: ${employees[name].address.district}, ${employees[name].address.province}\nSalary: ${employees[name].salary}`;
    alert(message);
  }
}
