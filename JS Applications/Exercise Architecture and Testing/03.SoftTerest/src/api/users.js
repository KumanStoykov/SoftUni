import { get, post  } from './api.js';

const endpoint = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
};

export async function loginUser(email, password) {
    const userData = await post(endpoint.login, { email, password });

   return localStorage.setItem('userData', JSON.stringify(userData));    
}

export async function registerUser(email, password) {
    const userData = await post(endpoint.register, {email, password});

  return  localStorage.setItem('userData', JSON.stringify(userData));
}

export async function logoutUser() {
    get(endpoint.logout);

    localStorage.removeItem('userData');
}