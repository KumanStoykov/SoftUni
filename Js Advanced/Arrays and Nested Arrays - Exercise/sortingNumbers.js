function sortingNumbers(arr) {
    let sort = arr.sort((a, b) => a - b);
    let biggest = sort.slice(sort.length / 2, sort.length).sort((a, b) => b - a);
    let smallest = sort.slice(0, sort.length / 2);

    const arrToPrint = [];
    for(let i = 0; i < biggest.length; i++) {
        if(undefined !== smallest[i]) {
            arrToPrint.push(smallest[i])
        }
         if (undefined !== biggest[i]) {
            arrToPrint.push(biggest[i]);
        }
        
    }
    return arrToPrint;

}



console.log(sortingNumbers([1, 2, 3, 4, 5]));