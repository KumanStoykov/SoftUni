function solve() {
    let textArea = document.querySelector('#input');
    
    let splitTextArea = textArea.value.split(/[\.] ?/);
    let withPoint = splitTextArea.filter(sentences => sentences.length > 0).map(sentences => sentences.concat('.'));
    let sentencesForPrint = [];
    let strConcat = [];
    let counter = 0;
    
    for (const sentences of withPoint) {
        
        counter++;
        
        if (counter < 3) {
            strConcat.push(sentences);
            
            if (withPoint.length === counter) {
                sentencesForPrint.push(strConcat.join(''));
                strConcat.length = 0;
            } else if(withPoint.length === (sentencesForPrint.length * 3 + counter)) {
                sentencesForPrint.push(strConcat.join(''));         
            }
            
        } else {
            counter = 0;
            strConcat.push(sentences);
            sentencesForPrint.push(strConcat.join(''));
            strConcat.length = 0;
        }
    }
    
    sentencesForPrint.forEach(para =>{
        let createPara = document.createElement('p');

        createPara.innerHTML = para;
        document.querySelector('#output').appendChild(createPara);
        
    });    

}