//จงสร้างตัวแปรชื่อ person ซึ่งเก็บข้อมูลประเภท Object และมี property 5 ชุด
// ซึ่งเป็นข้อมูลของผู้เรียน ได้แก่ ชื่อ, อายุ, เพศ, ที่อยู่, เบอร์โทร

const person = {
  name: "Celine",
  age: 3,
  gender: "female",
  addreess: {
    city: "Stavanger",
    district: "Rogaland",
    country: "Norway",
  },
  phone: 24844908,
};

console.log(person.name);
