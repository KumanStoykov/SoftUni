function bonusScoringSystem(input) {

    let students = Number(input.shift());
    let lectors = Number(input.shift());
    let bonus = Number(input.shift());

    let maxLectors = 0;
    let result = 0;


    for (let i = 0; i < students; i++) {
        let attendance = Number(input[i]);


        if (maxLectors <= attendance) {
            maxLectors = attendance;
            result = Math.ceil(attendance / lectors * (5 + bonus));
        }
    }

    console.log(`Max Bonus: ${result}.`);
    console.log(`The student has attended ${maxLectors} lectures.`);

}

bonusScoringSystem([
    '2', '25', '30',
    '17', '12', 
    
]);

// bonusScoringSystem([
//     '10', '30', '14', '8',
//     '23', '27', '28', '15',
//     '17', '25', '26', '5',
//     '18'
// ]);