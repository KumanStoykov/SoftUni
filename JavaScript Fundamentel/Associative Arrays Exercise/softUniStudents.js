function softUniStudents(input) {

    let listOfCourse = {};
    let capacity = {};


    for (let info of input) {

        if (info.includes(":")) {
            let [courseName, place] = info.split(": ");
            place = Number(place);
            if (!listOfCourse.hasOwnProperty(courseName)) {
                let obj = {
                    courseName,
                    students: {}
                }
                capacity[courseName] = place;
                listOfCourse[courseName] = obj;
            } else {
                capacity[courseName] += place;
            }
        } else {
            let [nameCredits, emailCurse] = info.split(" with email ");
            let index = nameCredits.indexOf("[");
            let userName = nameCredits.substring(0, index);
            let credits = nameCredits.substring(index + 1, nameCredits.length - 1);
            let [email, course] = emailCurse.split(" joins ");
            
            
            
            if (listOfCourse.hasOwnProperty(course)) {
                let studentsL = Object.keys(listOfCourse[course].students).length;
                if(studentsL < capacity[course]) {

                    listOfCourse[course].students[Number(credits)] = [userName, email];
                }
                
            }

        }
    }
    let sorted = Object.values(listOfCourse).sort((a, b) => {
        let aLength = Object.values(a.students).length;
        let bLength = Object.values(b.students).length;
        return bLength - aLength;
    });

    for (let course of sorted) {
        let lengthStudents = Object.keys(course.students).length;
        let result = capacity[course.courseName] - lengthStudents;


        console.log(`${course.courseName}: ${result} places left`);
        if (lengthStudents > 0) {

            Object.entries(course.students).sort((a, b) => b[0] - a[0])
                .forEach(student => console.log(`--- ${student[0]}: ${student[1][0]}, ${student[1][1]}`));
        }


    }
}
softUniStudents(['JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user32[25] with email user32@user.com joins JSCore',

    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',

    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'
]);