function sortAnArrayBy2Criteria(arrStr) {

    let sortStr = arrStr.sort(customSort);


    function customSort(a, b) {

        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            return a.localeCompare(b);
        }
    }


    return sortStr.join('\n')
}
console.log(sortAnArrayBy2Criteria(["alpha", "beta", "gamma"]));