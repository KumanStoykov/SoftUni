
export const getUserData = () => JSON.parse(localStorage.getItem('userData'));

export const setUserData = (data) => {
    const userData = {
        email: data.email,
        id: data._id,
        token: data.accessToken
    }
    localStorage.setItem('userData', JSON.stringify(userData));
};

export const clearUserData = () => localStorage.removeItem('userData');