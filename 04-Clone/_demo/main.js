//Clone Object
//Because copy object is copy by reference
//This is why we implimenting CLONE OBJECT

const log = console.log;

const todo = {
  task: "Do Hw",
  complete: false,
  dueDate: "13-08-2023",
};
//
//log(todo.cpmplete);

// 1. Clone
const newTodo = {};
//take the original and looping them all, after that  assign each key:value at the time to the New Object

for (let key in to) {
  newTodo[key] = todo[key];
  //newTodo[task] = todo[task] => 'Do Hw';
  //newTodo[complete] = todo[complete] => 'true';
  //newTodo[dueDate] = todo[dueDate] => '13-08-2023';
}
//log (newTodo);
//newTodo.complete = true;
//log (newTodo);
//log(todo);

// 2. Object assign(dst, [src1, src2, src3,])
/*
const todo = {
    task : 'Do Hw',
    complete : false,
    dueDate: '13-08-2023',
};
*/
//2a
const moreTodo = {};

// MERGE and Override//
// Direction of merging (if the new OBJECT have the same key with the Old Object) is RIGHT TO LEFT

Object.assign(moreTodo, todo); //Return address of the destination (param 1)

//2b
const moreTodo = Object.assign({}, todo);
console.log(moreTodo);
