function reverseAnArrayOfNumbers(n,arr){

    let revArr = [];
    let reversed = [];

    for (let index = 0; index < n; index++) {
        revArr.push(arr[index]);
    }

    for (let index = revArr.length - 1; index >= 0; index--) {
        reversed.push(revArr[index]);
        
    }

    

    console.log(reversed.join(" "));


}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);