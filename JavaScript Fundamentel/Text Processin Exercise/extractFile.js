function extractFile(input) {

    let lastIndexOfDashes = input.lastIndexOf('\\');

    let currentStr = input.substring(lastIndexOfDashes + 1);
    
    let pointLastIndef = currentStr.lastIndexOf('.');

    let strSlice = currentStr.slice(currentStr, pointLastIndef)
    
    let extensionCurrent = currentStr.substring(pointLastIndef + 1);
    


    

    console.log(`File name: ${strSlice}`);
    console.log(`File extension: ${extensionCurrent}`);
}

extractFile('C:\\Internal\\training-internal\\template.bak.pptx');