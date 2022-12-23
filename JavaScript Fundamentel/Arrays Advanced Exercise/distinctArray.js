function distinctArray(array) {

    let newArr = [];

    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        if(!newArr.includes(element)) {
            
            newArr.push(element);
        }
        
    }
    return newArr.join(' ');


}
console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]));