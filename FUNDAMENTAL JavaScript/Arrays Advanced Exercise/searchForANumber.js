function searchForANumber(arr, comands) {

    let n = comands[2];
    let deleted = comands[1];
    let elements = comands[0];

    let arrSearch = arr.splice(0, elements);
    let collectionArr = arrSearch.splice(0, deleted);
    let counter = 0;

    for (let nums of arrSearch) {


        if (nums === n) {
            counter++;
        }
    }

    console.log(`Number ${n} occurs ${counter} times.`)


}
console.log(searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]));