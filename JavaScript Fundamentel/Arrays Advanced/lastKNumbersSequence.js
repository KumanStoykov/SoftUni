function lastKNumbersSequence(n, k) {

    let sequence = [1];

    for (let index = 1; index < n; index++) {
        let startIndex = Math.max(0, index - k);
        let innerSquence = sequence.slice(startIndex, index);
        let sum = 0;
        for (let j = 0; j < innerSquence.length; j++) {
            
            sum += innerSquence[j];
        }
        sequence[index] = sum;
        
    }
    return sequence.join(' ');



}
console.log(lastKNumbersSequence(6, 3));