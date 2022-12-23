function sorting(arrNums) {

    let smallsNum = arrNums.slice().sort((a, b) => a - b);
    let bigestNum = arrNums.slice().sort((a, b) => b - a);
    let sortNumbs = [];

    for (let i = 0; i < arrNums.length; i++) {

        if (i % 2 === 0) {
            sortNumbs.push(bigestNum.shift());
        } else {
            sortNumbs.push(smallsNum.shift());
        }
    }
    console.log(sortNumbs.join(' '));

}
console.log(sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]));