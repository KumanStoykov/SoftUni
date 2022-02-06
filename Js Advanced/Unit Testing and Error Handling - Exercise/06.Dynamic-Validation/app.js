function validate() {
    const email = document.getElementById('email');
    const pattern = /[a-z]+@[a-z]+\.[a-z]+/;

   email.addEventListener('change', () => {
    if (!pattern.test(email.value) && email.value != '') {
        email.classList.add('error');
    }else if(pattern.test(email.value)){
        email.classList.remove('error');
    }
   });
}