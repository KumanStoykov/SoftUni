import { showView } from './dom.js';
import { showHome } from './home.js';



const registerSection = document.querySelector('.registerForm');
registerSection.remove();
//Make Registration
const formOnRegister = registerSection.querySelector('#formOnRegister');
formOnRegister.addEventListener('submit', onRegistration);

export function showRegister() {
    showView(registerSection);
}

async function onRegistration(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const repeatPassword = formData.get('repeatPassword').trim();
   
    try {
        if(!email) {
            throw new Error('The email input must be filled!');
        } else if(password.length < 6 || repeatPassword < 6) {
            throw new Error('The password should be at least 6 characters long!');
        } else if (password != repeatPassword) {
            throw new Error('The repeat password should be equal to the password');
        }
        
        const res = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        if(res.ok == false) {
            const error = await res.json();
            throw new Error(error.message);
        }

        const data = await res.json();
        const userData = JSON.stringify({
            email: data.email,
            username: data.username,
            id: data._id,
            token: data.accessToken
        });
        sessionStorage.setItem('userData', userData);       
        formOnRegister.reset();
        showHome();
    } catch(err) {
        alert(err.message);
    }
}
