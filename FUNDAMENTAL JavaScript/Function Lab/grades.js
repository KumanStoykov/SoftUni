function grades(grade) {

    let description = '';

    if (grade >= 3 && grade < 3.50) {
        description = 'Poor';
    } else if (grade < 4.50) {
        description = 'Good';
    } else if (grade < 5.50) {
        description = 'Very good';
    } else {
        description = 'Excellent'
    }

    if(grade < 3) {
        console.log('Fail (2)');
    }else{
        console.log(`${description} (${grade.toFixed(2)})`);
    }
}
grades(2.99)