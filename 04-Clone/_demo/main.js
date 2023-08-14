const todo = {
  task: "Do homework",
  complete: false,
  due_date: "13-08-2023",
};

const newTodo = {};

for (const key in todo) {
  newTodo[key] = todo[key];
}

console.log(newTodo);
console.log(todo === newTodo);

const newTodo2 = Object.assign({}, todo); //return address ของ destination หรือ newTodo
console.log(newTodo2);
console.log(todo === newTodo2);
