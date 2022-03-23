import { removeUserData, setUserData } from '../util.js';
import * as api from './api.js';


const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}

export async function loginUser(username, password) {
    const data = await api.post(endpoints.login, { username, password });

    const userData = {
        username: data.username,
        password: data.password,
        token: data.accessToken,
        id: data._id,
    }
    setUserData(userData);
}
export async function registerUSer(username, password) {
    const data = await api.post(endpoints.register, { username, password });

    const userData = {
        username: data.username,
        password: data.password,
        token: data.accessToken,
        id: data._id,
    }
    setUserData(userData);
}
export async function logoutUser() {
    await api.get(endpoints.logout);

    removeUserData('userData');
}