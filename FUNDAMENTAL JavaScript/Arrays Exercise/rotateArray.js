function rotateArray(arr) {

    let rotation = arr.pop();

    for(let i = 0; i < rotation; i++) {
        let currentNum = arr.pop();
        arr.unshift(currentNum);

    }

    console.log(arr.join(" "));


}
rotateArray(['1', '2', '3', '4', '2']);