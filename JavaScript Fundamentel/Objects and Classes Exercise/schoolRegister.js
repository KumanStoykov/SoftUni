function schoolRegister(input) {

    let students = {};

    for (let line of input) {
        let info = line.split(", ");
        let nameS = info[0].split(": ")[1];
        let grade = Number(info[1].split(": ")[1]) + 1;
        let avrScore = Number(info[2].split(": ")[1]);

        if (avrScore > 3) {
            let student = {
                nameS,
                avrScore
            };
            if (!students.hasOwnProperty(grade)) {
                students[grade] = [];
            }
            students[grade].push(student);

        }

    }

    let sorted = Object.keys(students).sort((a, b) => a - b);

    for (let key of sorted) {
        let student = students[key];
        console.log(`${key} Grade`);
        console.log(`List of students: ${student.map(s => s.nameS).join(", ")}`);
        console.log(`Average annual grade from last year: ${avr(student.map(s => s.avrScore)).toFixed(2)}`);
        console.log();


    }

    function avr(arr) {
        return arr.reduce((a, b) => (a + b), 0) / arr.length;
        
    }

}





schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
])