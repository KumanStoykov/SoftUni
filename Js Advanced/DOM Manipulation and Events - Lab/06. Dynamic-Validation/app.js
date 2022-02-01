function validate() {
    let input = document.querySelector('input');

    input.addEventListener('change', validator);
    function validator(e) {
        const pattern = /[a-z]+@[a-z]+\.[a-z]+/;
        let match = e.target.value.match(pattern);
        if(match !== null) {
            e.target.classList.remove('error');
        } else {
            e.target.classList.add('error');
        }
        if(e.target.value === '') {
            e.target.classList.remove('error');
        }
    }

}