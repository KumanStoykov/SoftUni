
export const getUserData = () => JSON.parse(sessionStorage.getItem('userData'));

export const setUserData = (data) => {
    const userData = {
        username: data.username,
        email: data.email,
        gender: data.gender,
        token: data.accessToken,
        id: data._id
    }
    sessionStorage.setItem('userData', JSON.stringify(userData));
}

export const removeUserData = () => sessionStorage.removeItem('userData');

