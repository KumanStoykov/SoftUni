function subSum(arr, star, end) {

    if(!Array.isArray(arr)){
        return NaN;
    }
    star = Math.max(star, 0);
    end = Math.min(end, arr.length - 1);

    return arr.slice(star, end + 1)
                .map(Number)
                .reduce((a, x) => a + x, 0);

}
let sum = subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);

console.log(sum);