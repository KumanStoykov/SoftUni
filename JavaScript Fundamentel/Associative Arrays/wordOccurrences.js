function wordOccurren(string) { 
    
    
    let strObject = {};


    
    
    for (let str of string) {
        let token = str.split(' ');
        let el = token[0];
        
        let counter = 0;
        
        for (let income of string) {
            let token = income.split(' ');
            let twoEl = token[0];
            
            if(el === twoEl) {
                counter++;
                strObject [el] = counter;
            } 
             
        }
    }
    
    
    let entries = Object.entries(strObject);
    let sorted = entries.sort((a, b) => b[1] - a[1]);

    for (let el of sorted) {
        console.log(`${el[0]} -> ${el[1]} times`);
    }


}

wordOccurren(["Here", "is", "the", "first", "sentence", 
"Here", "is", "another", "sentence", "And", "finally", 
"the", "third", "sentence"]);