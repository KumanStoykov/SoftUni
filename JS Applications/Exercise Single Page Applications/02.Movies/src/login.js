import { showView } from './dom.js';
import { showHome } from './home.js';


//SectionLogin
const formLoginSection = document.querySelector('#form-login-section');
formLoginSection.remove();

export function showLogin() {
    showView(formLoginSection);

}
//Form login
const form = formLoginSection.querySelector('#formLogin');

form.addEventListener('submit', onLogin);

async function onLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    try {
        const res = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        if (res.ok == false || res.status != 200) {
            const error = await res.json();
            throw new Error(error.message);
        }
        const data = await res.json();

        const userData = {
            email: data.email,
            username: data.username,
            id: data._id,
            token: data.accessToken
        }
        sessionStorage.setItem('userData', JSON.stringify(userData));
        showHome();
        form.reset();
    } catch (err) {
        alert(err.message);
    } 
}