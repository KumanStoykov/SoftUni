export function navigationBar() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData == null) {
        document.querySelector('#login-link').style.display = 'inline-block';
        document.querySelector('#register-link').style.display = 'inline-block';
        document.querySelector('#userNavEmail').style.display = 'none';
        document.querySelector('#logout-link').style.display = 'none';
    } else {
        document.querySelector('#login-link').style.display = 'none';
        document.querySelector('#register-link').style.display = 'none';
        document.querySelector('#userNavEmail').textContent = `Welcome, ${userData.email}`;
        document.querySelector('#userNavEmail').style.display = 'inline-block';
        document.querySelector('#logout-link').style.display = 'inline-block';
    }
    
}