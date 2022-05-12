
const baseUrl = 'http://localhost:3030/users';

export const login = (email, password) => {
   return fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json());
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

