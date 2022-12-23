function signCheck(a ,b ,c) {

    let result = '';

    if(a* b * c > 0) {
        result = 'Positive';
    } else {
        result = 'Negative';
    }


    console.log(result);
}
signCheck(5, 12,-15);