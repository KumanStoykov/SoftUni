function solution(n) {

    function add(n, num) {
      return  n + num;
    }    

    return add.bind(this, n);

}
let add5 = solution(5); // Partial application
console.log(add5(2));
console.log(add5(3));


