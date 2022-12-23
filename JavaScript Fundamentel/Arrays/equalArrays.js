function equalArrays(arr1, arr2) {

    let areEqual = true;
    let index = 0;
    let sum = 0;


    for (let i = 0; i < arr1.length; i++) {
        let firstEl = Number(arr1[i]);
        let secondEl = Number(arr2[i]);

        if (firstEl !== secondEl) {
            areEqual = false;
            index = i;
            console.log(`Arrays are not identical. Found difference at ${index} index`)
            break;
        } else {
            sum += firstEl;

        }

    }

    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}

equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);