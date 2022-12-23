function printNthElement(n) {

    let loop = n.pop();
    let nLoop = Number(loop)

    let newArr = [];

    for (let index = 0; index < n.length; index += nLoop) {
        const element = (n[index]);

        newArr.push(element);


    }

    console.log(newArr.join(" "));

}

printNthElement(['5', '20', '31', '4', '20', '2']);