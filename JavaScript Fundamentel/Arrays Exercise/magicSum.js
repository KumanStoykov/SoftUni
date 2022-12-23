function magicSum(arr, n) {

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        

        for (let j = i + 1; j < arr.length; j++) {

            let sum = element + arr[j];
            if (sum === n) {
                console.log(`${element} ${arr[j]}`);
            }

        }

    }


}
magicSum([1, 7, 6, 2, 19, 23],
    8);