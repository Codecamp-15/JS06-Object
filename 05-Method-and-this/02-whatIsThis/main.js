// function นี้ return object

// let user = makuUser ();
// == {name: "John", ref: this}

// user.ref.name => Joe

// ตอนที่ call user = call ณ จังหวะ window ซึ่ง user เป็น window ซึ่งใน window มี name อยู่ เลยกลายเป็น Joe
// เจอเพราะใช้ var ถ้าใช้ let ก็ไม่เจอ
