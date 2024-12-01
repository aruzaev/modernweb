const Animal = require("./animal");
const _ = require("lodash");

const dog = new Animal("dog", 14, "woof");
const cat = new Animal("cat", 10, "meow");

console.log(dog.introduce());
console.log(cat.introduce());

console.log(_.floor(4.8));
