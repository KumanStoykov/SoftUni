import { clearUserData, getUserData } from "../util.js";

const host = 'http://localhost:3030';

async function request(method, path, data) {

    const option = {
        method,
        headers: {}
    }

    if(data != undefined) {
        option.headers['Content-Type'] = 'application/json';
        option.body = JSON.stringify(data);
    }

    const userData = getUserData();

    if(userData) {
        option.headers['X-Authorization'] = userData.token; 
    }

    try {
        const res = await fetch(host + path, option);
        if(res.ok == false) {
            if(res.status == 403) {
                clearUserData();
            }
            const error = await res.json();
            throw new Error(error.message);
        }

        if(res.status == 204){
            return res;
        } else {
            return res.json();            
        }

    } catch(err) {
        alert(err.message);
        throw err;
    }
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');