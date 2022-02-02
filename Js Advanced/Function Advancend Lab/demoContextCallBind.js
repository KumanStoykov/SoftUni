// Function declaration
function fly() {


    console.log(this);

}
let hero = {
    name: 'superman',
    fly,
    // All assigned methods
    //function expression
    laserEyes: function () {
        console.log(this.name + ' - Shoot laser');
        console.log(this);
    },
    // Object method notation only for object and class
    stopBullets() {
        console.log(this);
    },
    // Arrow function 
    punch: () => {
        console.log(this);
    }
}


hero.laserEyes();
let shootLasers = hero.laserEyes;
shootLasers();


// Change function context
function fly(info){
    console.log(`${this.name} is flying!!! ${info}`);
}

let contextObject = {
    name: 'Wonder Woman',
    
};

fly('With cape');// Global context
fly.call(contextObject, 'With rope');// Call an function and give arguments
fly.call({name: 'Pesho'});
fly.apply({name: 'Gosho'}, ['With mind']);// Make a same will call but must with array literal

// using bind
let wonderWomenFly = fly.bind(contextObject); // Copy function and have a new context;

wonderWomenFly('With plane');

