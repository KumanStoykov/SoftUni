function rotaryArray(arr, rotary) {

    for(let i = 0; i < rotary; i++) {
       const currentNum =  arr.pop();
       arr.unshift(currentNum);
        
    }
    return arr.join(' ');
}

console.log(rotaryArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15

));