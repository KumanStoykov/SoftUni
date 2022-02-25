function bombNumbers(place, command) {

    let bomb = command[0];
    let power = command[1];

    let index = place.indexOf(bomb);

    while (index > -1) {
        place.splice(Math.max((index - power), 0), Math.min(power, index));

        index = place.indexOf(bomb);

        place.splice(index, power + 1);

        index = place.indexOf(bomb);
    }

    function sumArr(arr) {
        let totalSum = 0;
        for (let sum of arr) {
            totalSum += sum;
        }
        return totalSum;
    }

    return sumArr(place);


}
console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]));