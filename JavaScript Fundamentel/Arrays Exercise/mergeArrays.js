function mergeArrays(arr1, arr2) {

    let newArr = [];


    for (let i = 0; i < arr1.length; i++) {
        let firstEl = Number(arr1[i]);
        let secondEl = Number(arr2[i]);

        if (i % 2 === 0) {

            newArr.push(firstEl + secondEl);

        } else {
            firstEl = arr1[i];
            secondEl = arr2[i];
            newArr.push(firstEl + secondEl);
        }
    }

    console.log(newArr.join(" - "))
}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);