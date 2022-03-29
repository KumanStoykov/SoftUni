import * as api from './requester.js';

const endpoints = {
    getAll: '/data/theaters?sortBy=_createdOn%20desc&distinct=title',
    currentTheaters: (id) => `/data/theaters?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`,
    create: '/data/theaters',
    details: '/data/theaters/',
    edit: '/data/theaters/',
    delete: '/data/theaters/',
}

export const getAllEvents = () => api.get(endpoints.getAll);

export const createEvents = (data) => api.post(endpoints.create, data);

export const getOneEvent = (id) => api.get(endpoints.details + id);

export const editEvents = (id, data) => api.put(endpoints.edit + id, data);

export const deleteEvents = (id) => api.del(endpoints.edit + id);

export const myTheaters = (id) => api.get(endpoints.currentTheaters(id));