
export const getUserData = () => JSON.parse(sessionStorage.getItem('userData'));

export const setUserData = (data) => {
    const userData = {
        email: data.email,
        token: data.accessToken,
        id: data._id
    }    
    sessionStorage.setItem('userData', JSON.stringify(userData));
};

export const clearUserData = () => sessionStorage.removeItem('userData'); 