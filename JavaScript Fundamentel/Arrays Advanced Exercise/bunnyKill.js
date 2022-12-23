function bunnyKill(input) {

    let bunnyCoordinate = input.pop().split(" ").map(a => a.split(","));
    let snowBallDamage = 0;
    let killedBunnies = 0;
    let arr = [];
    for (let el of input) {
        let split = el.split(" ").map(Number);
        arr.push(split)
    }
    let arrRow = arr.length;
    let arrCol = arr[0].length;

    for (let i = 0; i < bunnyCoordinate.length; i++) {
        let bomb = bunnyCoordinate[i].map(Number);
        let bombRow = bomb[0];
        let bombCol = bomb[1];
        let bombValue = arr[bombRow][bombCol];

        if(bombValue > 0) {
            for(let row = bombRow - 1; row <= bombRow + 1; row++){
                for(let col = bombCol - 1; col <= bombCol + 1; col++) {
                    if(row >= 0 && col >= 0 && row < arrRow && arrCol > col) {
                        arr[row][col] -= bombValue;
                    }

                }
            }

            killedBunnies++;
            snowBallDamage += bombValue;
        }

    }

   
    let newArr = arr.toString().split(",")

    for (let line of newArr) {
        let num = Number(line);

        if (num > 0) {
            killedBunnies++
            snowBallDamage += num;
        }
    }

    console.log(snowBallDamage);
    console.log(killedBunnies);

}
bunnyKill(['5 10 15 20',
            '10 10 10 10',
            '10 15 10 10',
            '10 10 10 10',
            '2,2 0,1']);
// bunnyKill(['10 10 10',
//             '10 10 10', 
//             '10 10 10',
//             '0,0']);