function equalNeighbors(input) {

    let inputL = input.length;
    let counter = 0;

    for(let i = 0; i < inputL - 1; i++) {

        let lineOne = input[i];
        let lineTwo = input[i + 1];

        
        for(let j = 0;j < lineOne.length;j++) {
            let indexOfLineOne = lineOne[j];
            let lineOneIndexTwo = lineOne[j + 1];
            
            let indexOfLineTwo = lineTwo[j];
            let lineTwoIndexTwo = lineTwo[j + 1];
            
            
            if(indexOfLineOne === indexOfLineTwo) {
                counter++;

            }

            if(j < 1) {

                if(indexOfLineOne === lineOneIndexTwo) {
                    counter++;
                } 

            }


             if(indexOfLineTwo === lineTwoIndexTwo) {
                counter++;
            }
           
        }

    }
    console.log(counter);



}


// equalNeighbors([['2', '3', '4', '7', '0'],
//                 ['4', '0', '5', '3', '4'],
//                 ['2', '3', '5', '4', '2'],
//                 ['9', '8', '7', '5', '4']]);

equalNeighbors([["2", "2", "5", "7", "4"],
                ["4", "5", "5", "5", "4"],
                ["2", "5", "5", "4", "2"]]);