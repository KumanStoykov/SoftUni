function maxSequenceOfEqualElements(arr) {

    let sequenc = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let equal = [element];

        for (let j = i + 1; j < arr.length; j++) {
            
            if(element === arr[j]) {
                equal.push([element]);
            }else{
                break;
            }

            if (sequenc.length < equal.length) {
                sequenc = equal;
            }

            
        }
        
    }

    console.log(sequenc.join(" "));


}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);