// บรรทัดที่มี * และ ** ให้ผลลัพธ์เป็นอะไร เพราะอะไร

const user = {
    email: 'cc@gmail.com',
    isActive: true
};

user.isActive = false;
console.log(user); // * 
//{ email: 'cc@gmail.com', isActive: false }

user = {}; 
//TypeError: Assignment to constant variable.

console.log(user); // ** 
//{ email: 'cc@gmail.com', isActive: false }