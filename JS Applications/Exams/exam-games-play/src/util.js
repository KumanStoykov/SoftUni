

export const getUserData = () => JSON.parse(sessionStorage.getItem('userData'));

export const setUserData = (data) => sessionStorage.setItem('userData', JSON.stringify(data));

export const clearUserData = () => sessionStorage.removeItem('userData');