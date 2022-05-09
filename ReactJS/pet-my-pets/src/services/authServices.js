export const login = (username) => {
    localStorage.setItem('username', username);
};
export const logout = () => {
    localStorage.removeItem('username');
};

export const getUSer = () => {
    let username = localStorage.getItem('username');

    return username;
};

export const isAuthenticated = () => {   

    return Boolean(getUSer());
};

