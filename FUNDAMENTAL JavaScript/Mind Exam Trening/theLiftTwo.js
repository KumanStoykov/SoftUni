function theLift(input) {

    let people = input.shift();
    people = Number(people);
    let liftCabin = input.shift().split(" ");
    let lift = [];

    for (let info of liftCabin) {

        info = Number(info);

        if (info === 0) {

            if (people < 4) {
                lift.push(people);
                people -= people;
                people = 0;
            } else {
                people -= 4;
                lift.push(4);
            }

        } else if (info === 1) {

            if (people < 3) {
                lift.push(people);
                people -= people;
                people = 0;
            } else {
                people -= 3;
                lift.push(4);
            }
        } else if (info === 2) {
            if (people < 2) {
                lift.push(people);
                people -= people;
                people = 0;
            } else {
                people -= 2;
                lift.push(4);
            }
        } else if (info === 3) {
            if (people < 1) {
                lift.push(people);
                people -= people;
                people = 0;
            } else {
                people -= 1;
                lift.push(4);
            }

        } else if (info === 4) {
            lift.push(4);
            
        }
        
        
    }

    let sumOfLift = lift.filter(num => num < 4);


    if (sumOfLift.length === 0 && people < 1) {
        console.log(lift.join(" "));
    } else if (people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(lift.join(" "));
    } else if (sumOfLift.length !== 0){
        console.log(`The lift has empty spots!`);
        console.log(lift.join(" "));
    }

}

// theLift([
//     "20",
//     "0 2 0"
// ]);
theLift([
    "31",
    "1 0 2 0 4 0 2 3 4 0 0 0"
]);

// theLift([
//     "20",
//     "0 0 0 0 0"
// ])