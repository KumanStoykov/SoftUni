function loadingBar(n) {

    let num = n / 10;
    let percent = "";
    let point = "";

    for(let i = 0; i < num; i++) {
        percent += "%";

    }
    for(let j = num; j < 10; j++) {
        point += ".";
    }

    if(n === 100) {
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    } else {
        console.log(`${n}% [${percent}${point}]`);
        console.log('Still loading...')
    } 




}
let result = loadingBar(30);
console.log(result);