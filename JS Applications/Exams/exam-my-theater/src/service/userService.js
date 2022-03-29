import * as requester from '../service/requester.js';
import { setUserData } from '../utility/userStorage.js';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
}


export const login = (data) => {
   return requester.post(endpoints.login, data)
    .then(userData =>{
        setUserData(userData);
    });
};

export const register = (data) => {
   return requester.post(endpoints.register, data)
    .then(userData => {
        setUserData(userData);
    });
};

export const logout = () => requester.get(endpoints.logout);