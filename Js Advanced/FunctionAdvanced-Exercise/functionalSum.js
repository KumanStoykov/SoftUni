function add(a) {
    function sum(b) {
        a = a + b;
        return sum;
    }
    sum.toString = function () {
         return a; 
        }
    return sum;
}
console.log(add(1)(2)(4));