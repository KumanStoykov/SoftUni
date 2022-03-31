import * as requester from './requester.js';
import * as userStorage from '../utility/userStorage.js';


const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
}

export const login = (data) => {
   return requester.post(endpoints.login, data)
    .then(data => {
        userStorage.setUserData(data);
    })
};

export const register = (data) => {
   return requester.post(endpoints.register, data)
    .then(data => {
        userStorage.setUserData(data);
    })
};

export const logout = () => {
    requester.get(endpoints.logout)
    userStorage.clearUserData();
};