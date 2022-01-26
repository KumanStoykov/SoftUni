function extractIncreasing(arr) {
    let bigNum = 0;

    return arr.reduce((a, x) => {
        if( bigNum <= x) {
            bigNum = x;
            a.push(x);
        }
        return a;
    }, []);
}
console.log(extractIncreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]));


