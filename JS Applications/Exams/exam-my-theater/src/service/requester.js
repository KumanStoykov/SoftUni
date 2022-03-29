import { clearUserData, getUserData } from "../utility/userStorage.js";

const host = 'http://localhost:3030';

const requester = async (method, url, data) => {

    let option = {
        method,
        headers: {}
    }

    const user = getUserData();

    if(user) {
        option.headers['X-Authorization'] = user.token;
    }

    if(data) {
        option.headers['Content-Type'] = 'application/json';
        option.body = JSON.stringify(data);
    } 

    try {
        const res = await fetch(host + url, option);

        if(!res.ok) {
            if(res.status == 403) {
                clearUserData();
            }
            const error = await res.json();
            throw new Error(error.message);
        }

        if(res.status == 204) {
            return res;
        } else {
            return res.json();
        }

    }catch(err) {
        alert(err.message);
        throw err.message;
    }
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');