const log = console.log;
log('LEarn Ref.');

// ## Copied by Value
// PRIMITIVE variable
let message = 'Hello'; // message => 'Hello'
let phrase = message; // phrase => 'Hello'
log(message);
log(phrase);

message = 'Hi'; // message => 'Hi'
log(message);
log(phrase);


// ## COPIED BY REFERENCE
// OBJECT / Non-primitive
// assign Adress ของ user ให้กับ employee
let user = {
    name: 'John',
}
let employee = user;

user.name = 'Joe';
log(user);
log(employee);

log(user === employee); // มันจะเทียบ reference ของ object => true