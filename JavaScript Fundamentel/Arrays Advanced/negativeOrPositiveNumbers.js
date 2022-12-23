function negativeOrPositiveNumbers(arr) {

    let arrNew = [];


    for(let i = 0; i < arr.length; i++) {
        let currentN = Number(arr[i]);

        if(currentN < 0) {
            arrNew.unshift(arr[i]);
        }else {
            arrNew.push(arr[i]);
        }
    }
    return arrNew.join(' \n')

}

console.log(negativeOrPositiveNumbers([7, -2, 8, 9]));