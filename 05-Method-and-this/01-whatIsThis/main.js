// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร;

// ```js
// let user = {
//   name: 'John',
//   sayHi: function () {
//     console.log(this.name);
//   }
// };

// (user.sayHi)(); // *

let user = {
  name: 'John',
  sayHi: function () {
    console.log(`hi ${this.name}`);
  },
};

user.sayHi();
//return 'John'
