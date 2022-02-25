let flatArray = [];

function solve(input) {
    
    let inputL  = input.length;
    
    for(let i = 0; i < inputL; i++) {
        
        if(!Array.isArray(input[i])) {
            flatArray.push(input[i]);
        } else {
            solve(input[i]);
            
        }
    }

    return flatArray;
    
    
    

   
}

console.log(solve([1, 2, 'a', {},[3, 4, [5]], 123]));