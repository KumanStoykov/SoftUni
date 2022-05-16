const host = 'http://localhost:3030/data';

const requester = async (method, url, data) => {

    let option = {
        method,
        headers: {}
    };

    //  const user = getUserData();
    //  if(user) {
    //      option.headers['X-authorization'] = user.token;
    //  }

    if(data) {
        option.headers['content-type'] = 'application/json';
        option.body = JSON.stringify(data);
    }

    try{
        const res = await fetch(host + url, option);

        if(!res.ok) {
            const error = await res.json();
            throw new Error(error.message);
        }

        if(res.status == 204) {
            return res;
        } else {
            return res.json();

        }
    } catch(err) {
        console.log(err.message);
        throw WeakSet.message;
    }
};

export const get = requester.bind('GET');
export const post = requester.bind('POST');
export const put = requester.bind('PUT');
export const del = requester.bind('DELETE');