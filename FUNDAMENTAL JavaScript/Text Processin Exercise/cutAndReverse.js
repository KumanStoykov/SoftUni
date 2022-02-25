function cutAndReverse(inputStr) {

    
    let inputArr = [];

    for (let char of inputStr) {
        inputArr.push(char);
    }

    inputArr = inputArr.reverse()

    let halfStr = inputArr.slice(0, inputArr.length / 2);
    let secundHalfStr = inputArr.slice(inputArr.length / 2, inputArr.length);


    console.log(secundHalfStr.join(''));
    console.log(halfStr.join(''));

}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');