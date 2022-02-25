function numbers(input) {

    let sum = 0;
    let numSum = input.split(" ")
        .map(Number)
        .forEach(element => {

            sum += element;
        });

    let numOfInput = input.split(" ");
    let newArr = [];

    let neededNum = Math.round(sum / numOfInput.length);

    for (let num of numOfInput) {
        num = Number(num);
        if (num > neededNum) {
            newArr.push(num);
        }
    }
    let sorted = newArr.sort((a, b) => b - a);

    let slicedNum = sorted.slice(0, 5)


    if (newArr.length > 0) {

        console.log(slicedNum.join(" "));

    } else {
        console.log(`No`);
    }




}

// numbers('10 20 30 40 50');
numbers('1');