function cookingByNumbers() {
    let arg = Array.from(arguments);
    let num = Number(arg.shift());

    for (const command of arg) {

        if(command === 'chop') {
            num /= 2;
            console.log(num);
        } else if (command === 'dice'){
            num = Math.sqrt(num);
            console.log(num);
        } else if (command === 'spice') {
            num += 1;
            console.log(num);
        } else if (command === 'bake') {
            num *= 3;
            console.log(num);
        } else if (command === 'fillet') {
            num *= 0.80;
            console.log(num);

        }
        
    }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');