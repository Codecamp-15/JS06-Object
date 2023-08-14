// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร


const user = { name: 'Jack', role: 'ADMIN' };
const admin = { name: 'Jack', role: 'ADMIN' };
console.log(user === admin); // false เพราะ user กับ admin เก็บ object address คนละที่อยู่กัน 
