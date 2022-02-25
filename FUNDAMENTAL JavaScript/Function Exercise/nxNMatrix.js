function nxNMatrix(n) {

    function row(num) {

        let line = "";
    
        for (let index = 0; index < num; index++) {
            const element = num[index];
    
             line += "" + num + " ";
            
        }
        return line;
    }
    let printLines = '';

    for (let index = 0; index < n; index++) {
        const element = n[index];

         printLines += row(n) + " \n";   
       
    }

    return printLines

    
}

let result = nxNMatrix(3);
console.log(result);



