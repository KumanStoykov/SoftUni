import { getUserData, removeUserData } from "../util.js";

const url = 'http://localhost:3030';

async function request(method, path, data) {

    const option = {
        method: method,
        headers: {}
    }

    if (data != undefined) {
        option.headers['Content-Type'] = 'application/json';
        option.body = JSON.stringify(data);

    }

    const user = getUserData();

    if (user) {
        option.headers['X-Authorization'] = user.token;
    }

    try {
        const res = await fetch(url + path, option);
        if (res.ok == false) {
            if (res.status == 403) {
                removeUserData();
            }
            const error = await res.json();
            throw new Error(error.massage);
        }

        if (res.status == 204) {
            return res;
        } else {
            return await res.json();
        }

    } catch (err) {
        alert(err.massage);
        throw err;
    }
}

const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const put = request.bind(null, 'PUT');
const del = request.bind(null, 'DELETE');

export {
    get,
    post,
    put,
    del
}