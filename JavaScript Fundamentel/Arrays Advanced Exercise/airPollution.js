function airPollution(map, info) {

    let arrMap = [];

    for (let num of map) {
        let splitNum = num.split(" ").map(Number);
        arrMap.push(splitNum);

    }

    for (let token of info) {
        let [commands, index] = token.split(" ");
        index = Number(index);

        if (commands === "breeze") {
            rowIndex(arrMap, index);

        } else if (commands === "gale") {
            columIndex(arrMap, index);

        } else if (commands === "smog") {
            let value = index;
            smogValue(arrMap, value);

        }
    }
   
    let pollutedBlocks = [];
    let arrL = arrMap.length;

    for(let i = 0; i < arrL; i++) {

        for(let j = 0; j < arrL; j++) {

            if(arrMap[i][j] >= 50) {
                pollutedBlocks.push(`[${i}-${j}]`);
            }
        }
    }

    if(pollutedBlocks.length > 0) {
        console.log(`Polluted areas: ${pollutedBlocks.join(", ")}`)
    } else {
        console.log("No polluted areas");
    }





    function rowIndex(arr, index) {

        let arrL = arr.length;

        for (let i = index; i <= index; i++) {

            for (let j = 0; j < arrL; j++) {

                let result = arr[i][j] - 15;

                if (result < 0) {
                    arr[i][j] = 0;
                } else {
                    arr[i][j] -= 15;
                }
            }

        }
        return arr;

    }

    function columIndex(arr, index) {
        let arrL = arr.length;

        for(let i = 0; i < arrL; i++) {

            for(let j = index; j <= index; j++) {

                let result = arr[i][j] - 20;

                if(result < 0) {
                    arr[i][j] = 0;
                } else {
                    arr[i][j] -= 20;
                }
            }

        }
        return arr;

    }

    function smogValue(arr, value) {

        let arrL = arr.length;

        for(let i = 0; i < arrL; i++) {

            for(let j = 0; j < arrL; j++) {

                arr[i][j] += value;


            }
        }

        return arr;

    }




}

airPollution(['5 7 72 14 4',
        '41 35 37 27 33',
        '23 16 27 42 12',
        '2 20 28 39 14',
        '16 34 31 10 24'
    ],
    ['breeze 1', 'gale 2', 'smog 25']);