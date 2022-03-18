import { clearUserData, getUserData } from "../util.js";

const host = `http://localhost:3030`;

async function request(method, endpoint, data) {

    const options = {
        method,
        headers: {}
    };
    if(data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();

    if(userData) {
        const token = userData.accessToken;
        options.headers['X-Authorization'] = token;
    }
    try{
        const res = await fetch(host + endpoint, options);
        if(res.ok == false) {
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

    } catch(err) {
        alert(err.message);
        throw err;
    }
}

const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const put = request.bind(null, 'PUT');
const del = request.bind(null, 'DELETE');

export{
    get,
    post,
    put,
    del
};