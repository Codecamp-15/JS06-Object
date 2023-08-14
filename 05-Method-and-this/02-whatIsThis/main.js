var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this, //
  };
}
let user = makeUser(); //name: 'John';, ref: this,
console.log(user.ref.name); // 'Joe'
