// Pass function as argument
function hello(name){
    return `Hallo ${name}`;
}
function fancyHallo(name){
    return `Hi there mr. ${name}`;
}

function greet(personName, sayHallo){
    return sayHallo(personName);

}
console.log(greet('Pesho', hello));
console.log(greet('Stamat', fancyHallo));


//Return function
function greet(name) {
    return function (message) {
        console.log(`Hello there ${name}, ${message}`);
    }
}

let greetPesho = greet('Pesho');
greetPesho('How are you today');