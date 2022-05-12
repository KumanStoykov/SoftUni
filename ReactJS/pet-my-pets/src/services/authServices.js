
const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {


    let res = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });
    let result = await res.json();

    if (res.ok) {
        return result;
    } else {
        throw result;
    }


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

