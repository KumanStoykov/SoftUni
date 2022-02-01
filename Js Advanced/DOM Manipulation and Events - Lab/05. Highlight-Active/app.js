function focused() {
    let getInput = document.querySelectorAll('div div');
    
    for (let currentInput of getInput) {

        currentInput.addEventListener('focus', focusFun, true);
        currentInput.addEventListener('blur', blurredFun, true);
        
    }

    function focusFun(e) {
        e.currentTarget.classList.add('focused');
    }
    function blurredFun(e) {
        e.currentTarget.classList.remove('focused');
    }
}