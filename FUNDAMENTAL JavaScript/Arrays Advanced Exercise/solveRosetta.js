function rosettaStone(inputArray) {
    let templateV = Number(inputArray.shift())
 
    let template = []
    for (let i = 0; i < templateV; i++) {
        let str = inputArray.shift()
        let arr = str.split(" ")
        arr = arr.map((el) => {
            return Number(el)
        })
        template.push(arr)
    }
    let templateH = template[0].length
    let decodedMessage = []
    let inputArrayL = inputArray.length
    for (let i = 0; i < inputArrayL; i++) {
        let str = inputArray.shift()
        let arr = str.split(" ")
        arr = arr.map((el) => {
            return Number(el)
        })
        decodedMessage.push(arr)
    }
    let decodedMessageV = decodedMessage.length
    let decodedMessageH = decodedMessage[0].length
 
 
 
    for (let i = 0; i < decodedMessageV; i += templateV) {
        for (let j = 0; j < decodedMessageH; j += templateH) {
            decodePart(i, j, template, decodedMessage)
        }
    }
 
    decodedMessage = decodeNumsToChar(decodedMessage)
 
    console.log(revealMessage(decodedMessage))
 
    // FUNCTIONS
 
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
 
    function decodeNumsToChar(decodedMatrix) {
        for (let i = 0; i < decodedMatrix.length; i++) {
            let arr = decodedMatrix[i]
            arr = arr.map((el) => {
                el = el % 27 + 64
                if (el === 64) {
                    el = 32
                }
                el = String.fromCharCode(el)
                return el
            })
            decodedMatrix[i] = arr
        }
        return decodedMatrix
    }
 
    function revealMessage(decodedMatrix){
        for (let i = 0;i<decodedMatrix.length;i++){
            decodedMatrix[i] = decodedMatrix[i].join("")
        }
        
        let printMessage = decodedMatrix.join("")
        return printMessage
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