function rosettaStone(input) {

    let lengthTemplate = Number(input.shift());
    let templateMatrix = input.splice(0, lengthTemplate).map(element => {
        return element.split(" ").map(Number);
    });

    let arrCode = [];

    for (let el of input) {
        let num = el.split(" ").map(Number);
        arrCode.push(num);
    }
    let arrRow = arrCode.length;
    let arrCol = arrCode[0].length;
    let colTemplate = templateMatrix[0].length;

    for (let row = 0; row < arrRow; row += lengthTemplate) {
        for (let col = 0; col < arrCol; col += colTemplate) {
            decodePart(row, col,templateMatrix, arrCode);
        }
    }


   
    let code = [" ", "A","B","C","D","E","F","G","H","I","J","K","L","M","N",
                    "O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        let arrToString = arrCode.toString().split(",");

        for(let index = 0; index < arrToString.length; index++) {
                let char = Number(arrToString[index]);
            
            for(let i = 0; i <= char;){

                if(char <= 26) {
                    arrCode[index] = code[char];
                    break;
                }

                char = char - code.length;   

            }
        }

        console.log(arrCode.join(""))

        function decodePart(y, x, codeMatrix, decodedMatrix) {
            let codeMatrixV = codeMatrix.length
            let codeMatrixH = codeMatrix[0].length
            let decodedMatrixV = decodedMatrix.length
            let decodedMatrixH = decodedMatrix[0].length
            for (let v = 0; v < codeMatrixV; v++) {
                for (let h = 0; h < codeMatrixH; h++) {
                    let keyElement = codeMatrix[v][h]
     
                    if (y + v >= decodedMatrixV || x + h >= decodedMatrixH) {
                        continue
                    } else {
                        decodedMatrix[y + v][x + h] += keyElement
                    }
                }
            }
        }

}


rosettaStone(['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']);

    // rosettaStone(["1",
    //     "1 3 13",
    //     "12 22 14 13 25 0 4 24 23",
    //     "18 24 2 25 22 0 0 11 18",
    //     "8 25 6 26 8 23 13 4 14",
    //     "14 3 14 10 6 1 6 16 14",
    //     "11 12 2 10 24 2 13 24 0",
    //     "24 24 10 14 15 25 18 24 12",
    //     "4 24 0 8 4 22 19 22 14",
    //     "0 11 18 26 1 19 18 13 15",
    //     "8 15 14 26 24 14 26 24 14",])