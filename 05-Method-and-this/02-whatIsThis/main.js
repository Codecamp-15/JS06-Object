// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร


var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser();
console.log(user.ref.name); // Joe
