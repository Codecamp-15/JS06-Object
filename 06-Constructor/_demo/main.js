const log = console.log;

const dev1 = {
    name: 'John',
    age: 32,
    role: 'dev',
    salary: 40_000,
    dev: function () {
        console.log("I'm develop some features");
    },
};

// Object Creators == Constructor Function
function Developer(name, age) {
    // [1] Implicit create 
    //  this = {}
    this.role = 'dev';  // {name: 'Pavit'}
    this.age = age;
    this.salary = 40_000;
    this.dev = function () {
        console.log("I'm develop some features");
    }; // {name..., dev, : fn()}

    // [2] Implicit Return this
    // return {name..., dev : fn()}
}

// this == dev2
// [3] this ===  Instance
const dev2 = new Developer('Pavit', 25);
log(dev2);
dev2.dev();

const dev3 = new Developer('Jane', 50);
log(dev3);
dev3.dev();