export async function setUserData(data) {
    const userData = await data
    sessionStorage.setItem('userData', JSON.stringify(userData));
}

export function getUserData() {
   return JSON.parse(sessionStorage.getItem('userData'));
}

export function clearUserData() {
    sessionStorage.removeItem('userData');
}