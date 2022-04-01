
const err = document.querySelector('#errorBox');

const errPush = document.querySelector('.msg');

export const notificationView = (errMsg) => {

    errPush.textContent = errMsg;

    err.style.display = 'inline-block';

    setTimeout(() => {
        err.style.display = 'none';
    }, 3000);


}