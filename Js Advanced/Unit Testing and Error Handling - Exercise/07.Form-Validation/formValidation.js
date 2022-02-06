function validate() {
   
    const userNameInput = document.querySelector('#username');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const confirmPasswordInput = document.querySelector('#confirm-password');
    const companyNumberInput = document.querySelector('#companyNumber');

    const submitBtn = document.querySelector('#submit');

    submitBtn.addEventListener('click', inputsField);

    function inputsField(e) {
        e.preventDefault();

        const userNameRegEx = /^[a-zA-Z0-9]{3,20}$/;
        const passwordRegEx = /^[\w_]{5,15}$/;
        const emailRegEx =  /.*@.*\..*/g;
        const companyRegEx = /^[0-9]{4}$/;

        let isValid = true;

        if (userNameRegEx.test(userNameInput.value)) {
            userNameInput.style.borderColor = ''
            
        } else {
            userNameInput.style.borderColor = 'red'
            isValid = false;
        }

        if(emailRegEx.test(emailInput.value)) {
            emailInput.style.borderColor = '';
        } else {
            emailInput.style.borderColor = 'red';
            isValid = false;
        }

        if (passwordRegEx.test(passwordInput.value) && passwordRegEx.test(confirmPasswordInput.value)
            && (passwordInput.value === confirmPasswordInput.value)) {
                passwordInput.style.borderColor = '';
                confirmPasswordInput.style.borderColor = '';
            } else {
                passwordInput.style.borderColor = 'red';
                confirmPasswordInput.style.borderColor = 'red';
                isValid = false;
        }

        if(companyRegEx.test(companyNumberInput.value) && document.querySelector('#company').checked == true) {
            companyNumberInput.style.borderColor = '';
        } else if (document.querySelector('#company').checked == true){
            companyNumberInput.style.borderColor = 'red';
             isValid = false;
        }

        if(isValid) {
            document.querySelector('#valid').style.display = 'block';
        } else if(!isValid) {
            document.querySelector('#valid').style.display = 'none';
        }
        
    }
    // Check box
    document.querySelector('#company').addEventListener('change', () => {

        if(document.querySelector('#company').checked == true) {            
            document.querySelector('#companyInfo').style.display = 'block';
        } else {
            document.querySelector('#companyInfo').style.display = 'none';
        }
    });
}
