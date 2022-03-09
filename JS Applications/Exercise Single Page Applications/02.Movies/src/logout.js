import { showHome } from './home.js';

export async function onLogout() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
   
    if(userData == null) {
        return;
    }

    await fetch('http://localhost:3030/users/logout', {
        headers: {
            'X-Authorization': userData.token
        }
    });
    sessionStorage.removeItem('userData');
    showHome();
            
}