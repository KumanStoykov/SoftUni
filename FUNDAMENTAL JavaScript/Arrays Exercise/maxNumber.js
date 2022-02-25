function maxNumber(arr) {

    let newArr = [];

    for (let index = 0; index < arr.length; index++) {

        let isTop = true;

        for (let j = index + 1; j < arr.length; j++) {
            if (arr[index] <= arr[j]) {
                isTop = false;
                break;
            }


        }
        if (isTop) {
            newArr.push(arr[index]);
        }


    }

    console.log(newArr.join(" "));


}
 maxNumber([1, 4, 3, 2]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);