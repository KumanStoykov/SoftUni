function jansNotation(input) {

    let arr = [];

    for (let el of input) {

        let firstNum = arr.length - 2;
        let secundNum = arr.length - 1;
        let result = 0;

        if(el === "+") {
            result = arr[firstNum] + arr[secundNum];
            arr.splice(firstNum, 2);
            arr.push(result);

        } else if (el === "-") {
            result = arr[firstNum] - arr[secundNum];
            arr.splice(firstNum, 2);
            arr.push(result);

        } else if (el === "/") {
            result = arr[firstNum] / arr[secundNum];
            arr.splice(firstNum, 2);
            arr.push(result);


        } else if (el === "*") {
            result = arr[firstNum] * arr[secundNum];
            arr.splice(firstNum, 2);
            arr.push(result);

        } else if (typeof el === "number"){
            arr.push(el);
        }
        
    }

    
    if(arr.length > 1) {
        console.log("Error: too many operands!");
    } else if (isNaN(arr)) {
        console.log("Error: not enough operands!");
        
    } else {
        console.log(arr.join(""));
    }

}

jansNotation([15,
    '/']);
