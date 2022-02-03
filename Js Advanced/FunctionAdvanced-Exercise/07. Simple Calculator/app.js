function calculator() {

    let [firstNum, secundNum, result] = '';

    const calculate = {
        add,
        subtract,
        init      
        
    }
    return calculate;
    
    function add(){
     result.value = Number(firstNum.value) + Number(secundNum.value);
    }

    function subtract(){
        result.value = Number(firstNum.value) - Number(secundNum.value);
    }

    function init(num1, num2, res) {
         firstNum = document.querySelector(num1);
         secundNum = document.querySelector(num2);
         result = document.querySelector(res);
    }

}




const calculate = calculator();
calculate.init('#num1', '#num2', '#result'); 
