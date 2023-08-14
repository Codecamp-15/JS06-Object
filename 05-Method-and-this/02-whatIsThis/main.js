// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร


var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
//  makeUser() : Window เป็นคน Call
let user = makeUser(); // {name: 'John', ref: this}  // this == Window
console.log(user.ref.name); // *  // => Window.name  // => 'Joe'
console.log(user.ref)// => Window {window: Window, self: Window, document: document, name: 'Joe', location: Location, …}
console.log(user); // => {name: 'John', ref: Window}

