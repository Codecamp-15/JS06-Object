let user = {
  name: "John",
  surname: "Doe",
};

user.name = "Matt";
console.log(user.name);

delete user.name;
console.log(user);
