import * as api from '../services/api.js';
import { clearUserData, setUserData } from '../util.js';

const endpoints = {
    loginPath: '/users/login',
    registerPath: '/users/register',
    logoutPath: '/users/logout',
}

export const login = async (email, password) => {
   const data =  await api.post(endpoints.loginPath, {email, password});
   const userData = {
       email: data.email,
       password: data.password,
       token: data.accessToken,
       id: data._id
   }
   setUserData(userData);
}
export const register = async (email, password) => {
   const data =  await api.post(endpoints.registerPath, {email, password});
   const userData = {
       email: data.email,
       password: data.password,
       token: data.accessToken,
       id: data._id
   }
   setUserData(userData);
}

export const logout = async () => {
    api.get(endpoints.logoutPath);
    clearUserData();
}