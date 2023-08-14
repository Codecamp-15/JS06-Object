//Learning the reference
const log = console.log;
log("Learn Ref.");

//Coppied by Value
//Primitive

let message = "Hello"; //message is a box that keeping a value of "Hello"
let word = message; // word will copy "Hello" value and store it in the box, which is word
// They both has its own box now if you change the value of word , the value of message will stay the same

//Coppied by Reference is coppying the address
//Once you assign the object_name to a varible
//if you change the value of the original box (which is the object), the value of the
//variable will also change

let user = {
  name: "John",
};

let employee = user;
log(employee);

user.name = "Joe";
log(user);
log(employee);
