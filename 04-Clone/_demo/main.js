const log = console.log;
log("Object Clone");

let todo = {
  task: "Do homework",
  complete: false,
  due_date: "13-08-2023",
};

// const newTodo = todo;
// newTodo.complete = true;
// log(todo.complete); // true

//////////////////////////////////// CLONE /////////////////////////////////////

/* const newTodo = {};

/////////////////////////////////// Way 1 //////////////////////////////////////

// เอาต้นแบบมา loop แล้ว assign ทีละ key: value ให้ object ใหม่

for (let key in todo) {
  // assign ทีละ key: value ให้กับ newTodo
  newTodo[key] = todo[key]; // === เอา object todo ใน property key มา และ assign ให้ newTodo ในรอบนั้น
  // loop รอบแรก === newTodo["task"] = todo ["task"] => "Do homework"
  // loop รอบสอง === newTodo["complete"] = todo ["complete"] => false
  // loop รอบสาม === newTodo["due_date"] = todo ["due_date"] => "13-08-2023"
}

log(newTodo);
newTodo.complete = true;
log(newTodo.complete); // true
log(todo.complete); // false */

////////////////////////////////// Way 2 //////////////////////////////////////
// Object.assign(dst, [src1, src2,......,srcN])

////// 2.1 ///////
// const newTodo = {
//   //   complete: true,
// };

// // Object.assign( , , , , , ); // รับ parameter ได้ไม่จำกัด แต่ทุกตัวต้องเป็น object

// Object.assign(newTodo, todo); // = 2 objects
// // Merge & Override Direction: evaluate จาก right -> left
// // ในกรณีที่มี key ซ้ำกัน ตัว object ขวา จะเขียนทับตัวซ้าย

// log(newTodo); // {task: 'Do homework', complete: false, due_date: '13-08-2023'}

// แต่ถ้าตอนเราสร้าง obj ใหม่ มีของข้างใน มันก็จะโดนเขียนทับ เช่น newTodo มี complete: true อยู่ ตอนเราสร้าง
// {task: 'Do homework', complete: false, due_date: '13-08-2023'}
// complete เป็น false เพราะว่ามัน eval มาจากตัวขวาคือ todo ที่มีค่า complete เป็น false

////// 2.2 ///////
const newTodo = Object.assign({}, todo);
log(newTodo); // {task: 'Do homework', complete: false, due_date: '13-08-2023'}

// clone จาก obj todo ไปที่ obj ว่างที่เพิ่งสร้างมาใหม่
// ทำจากขวาไปซ้าย ทีละคู่
