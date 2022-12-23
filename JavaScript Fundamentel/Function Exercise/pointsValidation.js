function pointsValidation(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    let checkFirstPoint = firstPoint(arr);
    let checkSecondPoint = secondPoint(arr);
    let checkThirdPoint = thirdPoint(arr);

    if (checkFirstPoint === Math.trunc(checkFirstPoint)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (checkSecondPoint === Math.trunc(checkSecondPoint)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (checkThirdPoint === Math.trunc(checkThirdPoint)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }



    function firstPoint() {
        let checkOne = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));


        return checkOne;
    }

    function secondPoint() {
        let checkTwo = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
        return checkTwo;
    }

    function thirdPoint() {
        let checkThree = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
        return checkThree;
    }


}





pointsValidation([2, 1, 1, 1]);