function arrayRotation(arr1, rotation) {

    

    for (let index = 0; index < rotation; index++) {
        let element = arr1.shift();
        arr1.push(element);
        
        
    }

    console.log(arr1.join(" "))



}
arrayRotation([51, 47, 32, 61, 21], 2);