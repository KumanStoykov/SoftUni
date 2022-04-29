export const settings = {
    host: ''
};

async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            const data = await response.json();
            return data;
        } catch (err) {
            return response;
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

async function getOptions(method = 'get', body) {
    const options = {
        method,
        headers: {}
    };

    let token = sessionStorage.getItem('authToken');

    if (token != null) {
        //Simulate
        let isValid = false;
        let refreshToken = sessionStorage.getItem('refreshToken');

        if (!isValid) {
            let res = await fetch('http://localhost:3030/users/refresh', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    refreshToken
                })
            })
            let result = await res.json();

            sessionStorage.setItem('authToken', result.accessToken);
            sessionStorage.setItem('refreshToken', result.refreshToken);

            token = result.accessToken;

        } else {
            options.headers['X-Authorization'] = token;

        }

    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;
}

export async function get(url) {
    return await request(url, await getOptions());
}

export async function post(url, data) {
    return await request(url, await getOptions('post', data));
}

export async function put(url, data) {
    return await request(url, await getOptions('put', data));
}

export async function del(url) {
    return await request(url, await getOptions('delete'));
}

export async function login(email, password) {
    const result = await post(settings.host + '/users/login', { email, password });

    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('refreshToken', result.refreshToken);
    sessionStorage.setItem('userId', result._id);

    return result;
}

export async function register(email, password) {
    const result = await post(settings.host + '/users/register', { email, password });

    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('refreshToken', result.refreshToken);
    sessionStorage.setItem('userId', result._id);

    return result;
}

export async function logout() {
    const result = await get(settings.host + '/users/logout');

    sessionStorage.removeItem('email');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('userId');

    return result;
}