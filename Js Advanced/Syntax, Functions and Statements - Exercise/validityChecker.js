function validityChecker(x1, y1, x2, y2) {

    function isTop(x1, y1, x2, y2) {
        let abscise = x1 - x2;
        let ordinate = y1 - y2;
        return Math.sqrt((abscise ** 2) + (ordinate ** 2));
    }

    if (Number.isInteger(isTop(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);

    } else {
        console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
    }

    if (Number.isInteger(isTop(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);

    } else {
        console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
    }
    if (Number.isInteger(isTop(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);

    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

validityChecker(3, 0, 0, 4);