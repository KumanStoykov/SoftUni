function sortArray(input, command) {

    return input.sort((a, b) => command == 'asc' ? a - b : b - a);

}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));