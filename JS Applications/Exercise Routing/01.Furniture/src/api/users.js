import { clearUserData, setUserData } from '../util.js';
import * as api from './api.js';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
}

export async function loginUser(email, password) {
    const data = await api.post(endpoints.login, { email, password });
    return setUserData(data);
}
export async function registerUser(email, password) {
    const data = await api.post(endpoints.register, { email, password });
    return setUserData(data);
}
export async function logoutUser() {
     api.get(endpoints.logout);
    clearUserData('userData');
}