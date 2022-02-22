let { Repository } = require("./solution.js");

// Initialize props object
let properties = {
    name: "string",
    age: "number",
    birthday: "object"
};
//Initialize the repository
let repository = new Repository(properties);
// Add two entities
let entity = {
    name: "Pesho",
    age: 22,
    birthday: new Date(1998, 0, 7)
};
repository.add(entity); // Returns 0
repository.add(entity); // Returns 1
console.log(repository.getId(0));
// {"name":"Pesho","age":22,"birthday":"1998-01-06T22:00:00.000Z"}
console.log(repository.getId(1));
// {"name":"Pesho","age":22,"birthday":"1998-01-06T22:00:00.000Z"}
//Update an entity
entity = {
    name: 'Gosho',
    age: 22,
    birthday: new Date(1998, 0, 7)
};
repository.update(1, entity);
console.log(repository.getId(1));
// {"name":"Gosho","age":22,"birthday":"1998-01-06T22:00:00.000Z"}
// Delete an entity
repository.del(0);
console.log(repository.count); // Returns 1
let anotherEntity = {
    name1: 'Stamat',
    age: 29,
    birthday: new Date(1991, 0, 21)
};
// repository.add(anotherEntity); // should throw an Error
anotherEntity = {
    name: 'Stamat',
    age: 29,
    birthday: 1991
};
// repository.add(anotherEntity); // should throw a TypeError
// repository.del(-1); // should throw Error for invalid id