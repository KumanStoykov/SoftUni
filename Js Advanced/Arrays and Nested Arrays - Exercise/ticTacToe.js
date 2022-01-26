function ticTacToe(moves) {
    let dahsBoard = [
        ["false", "false", "false"],
        ["false", "false", "false"],
        ["false", "false", "false"],
    ];
    let isWin = false;
    let counter = 0;

    for (let move of moves) {
        let [row, colum] = move.split(" ").map(Number);

        if (dahsBoard[row][colum] !== "false") {
            console.log("This place is already taken. Please choose another!");
        } else {
            if (counter % 2 === 0) {
                dahsBoard[row][colum] = 'X';
                counter++;
            } else {
                dahsBoard[row][colum] = 'O';
                counter++;
            }
        }
        if(dahsBoard[0][0] === 'X' && dahsBoard[0][1] === 'X' && dahsBoard[0][2] === 'X') {
            isWin = true;
            console.log(`Player X wins!`);
            break;
        } else if (dahsBoard[0][0] === 'O' && dahsBoard[0][1] === 'O' && dahsBoard[0][2] === 'O') {
            isWin = true;
            console.log(`Player O wins!`);
            break;
        } else if (dahsBoard[1][0] === 'X' && dahsBoard[1][1] === 'X' && dahsBoard[1][2] === 'X') {
            isWin = true;
            console.log(`Player X wins!`);
            break;
        } else if (dahsBoard[1][0] === 'O' && dahsBoard[1][1] === 'O' && dahsBoard[1][2] === 'O') {
            isWin = true;
            console.log(`Player O wins!`);
            break;
        } else if (dahsBoard[2][0] === 'X' && dahsBoard[2][1] === 'X' && dahsBoard[2][2] === 'X') {
            isWin = true;
            console.log(`Player X wins!`);
            break;
        } else if (dahsBoard[2][0] === 'O' && dahsBoard[2][1] === 'O' && dahsBoard[2][2] === 'O') {
            isWin = true;
            console.log(`Player O wins!`);
            break;
        } else if (dahsBoard[0][0] === 'X' && dahsBoard[1][0] === 'X' && dahsBoard[2][0] === 'X') {
            isWin = true;
            console.log(`Player X wins!`);
            break;
        } else if (dahsBoard[0][0] === 'O' && dahsBoard[1][0] === 'O' && dahsBoard[2][0] === 'O') {
            isWin = true;
            console.log(`Player O wins!`);
            break;
        } else if (dahsBoard[0][1] === 'X' && dahsBoard[1][1] === 'X' && dahsBoard[2][1] === 'X') {
            isWin = true;
            console.log(`Player X wins!`);
            break;
        } else if (dahsBoard[0][1] === 'O' && dahsBoard[1][1] === 'O' && dahsBoard[2][1] === 'O') {
            isWin = true;
            console.log(`Player O wins!`);
            break;
        } else if (dahsBoard[0][2] === 'X' && dahsBoard[1][2] === 'X' && dahsBoard[2][2] === 'X') {
            isWin = true;
            console.log(`Player X wins!`);
            break;
        } else if (dahsBoard[0][2] === 'O' && dahsBoard[1][2] === 'O' && dahsBoard[2][2] === 'O') {
            isWin = true;
            console.log(`Player O wins!`);
            break;
        } else if (dahsBoard[0][1] === 'X' && dahsBoard[1][1] === 'X' && dahsBoard[2][1] === 'X') {
            isWin = true;
            console.log(`Player X wins!`);
            break;
        } else if (dahsBoard[0][1] === 'O' && dahsBoard[1][1] === 'O' && dahsBoard[2][1] === 'O') {
            isWin = true;
            console.log(`Player O wins!`);
            break;
        } else if (dahsBoard[0][0] === 'X' && dahsBoard[1][1] === 'X' && dahsBoard[2][2] === 'X') {
            isWin = true;
            console.log(`Player X wins!`);
            break;
        } else if (dahsBoard[0][0] === 'O' && dahsBoard[1][1] === 'O' && dahsBoard[2][2] === 'O') {
            isWin = true;
            console.log(`Player O wins!`);
            break;
        } else if (dahsBoard[0][2] === 'X' && dahsBoard[1][1] === 'X' && dahsBoard[2][0] === 'X') {
            isWin = true;
            console.log(`Player X wins!`);
            break;
        } else if (dahsBoard[0][2] === 'O' && dahsBoard[1][1] === 'O' && dahsBoard[2][0] === 'O') {
            isWin = true;
            console.log(`Player O wins!`);
            break;
        }
        let toControl = dahsBoard.flat();

        if(!toControl.includes('false')) {
            break;
        }
    }

    if(!isWin) {
        console.log(`The game ended! Nobody wins :(`);
        dahsBoard.forEach(row => console.log(`${row[0]}\t${row[1]}\t${row[2]}`));
    } else {
        for (const row of dahsBoard) {
             console.log(`${row[0]}\t${row[1]}\t${row[2]}`);
        }
    }

}

ticTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
);
