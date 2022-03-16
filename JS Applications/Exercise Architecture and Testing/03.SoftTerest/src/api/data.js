import * as api from './api.js';

const endpoints = {
    'ideas': '/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    'create': '/data/ideas',
    'delete': '/data/ideas/',
    'details': '/data/ideas/'
}
export async function getAllIdeas() {
    return api.get(endpoints.ideas);
}

export async function createIdeasRequest(data) {
    return api.post(endpoints.create, data);
}

export async function deleteIdeas(id) {
    return api.del(endpoints.delete + id);
}

export async function detailsIdeas(id) {
    return api.get(endpoints.details + id);
}