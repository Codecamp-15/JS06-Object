// - ให้รับข้อมูลเป็นชื่อพนักงาน
// - หากมีพนักงานที่ชื่อตรงกับคีย์ในอ็อบเจ็คด้านล่างให้แสดงข้อความว่า Name: john, salary: 1000, address: Ratchathewi, Bangkok หากไม่มีชื่อแสดงข้อความว่า Not Found

const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
};


let name = prompt('Enter name: ');

if (employees.hasOwnProperty(name)) {
    let personalInfo = employees[name]
    let salary = personalInfo.salary;
    let address = personalInfo.address;
    alert(`Name: ${name}, salary: ${salary}, address: ${address.district}, ${address.province}`);

} else {
    alert('Not Found');
}
