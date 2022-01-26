function magicMatrix(matrix) {

    if(matrix.length  < 3) {
        return false;
    }

    
    if(matrix[0].length > 0 && matrix[1].length > 0 && matrix[2].length > 0) {
        let firstArr = matrix[0].reduce((a, x) => a + x);
        let secundArr = matrix[1].reduce((a, x) => a + x);
        let  thirdArr = matrix[2].reduce((a, x) => a + x);

        if(firstArr === secundArr && firstArr === thirdArr && secundArr === thirdArr) {
            return true;
        } else {
            return false;
        }

    } else {
        return false;
    }
   

}

console.log(
magicMatrix([
    [21, 0, 1],
    [21, 1, 1]]))