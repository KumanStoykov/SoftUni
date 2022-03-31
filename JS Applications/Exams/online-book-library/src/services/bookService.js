import * as requester from './requester.js';

const endpoints = {
    allBooks: '/data/books?sortBy=_createdOn%20desc',
    create: '/data/books',
    currentCollection: (userId) => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    details: '/data/books/',
    edit: '/data/books/',
    delete: '/data/books/',
}

export const getAllBooks = () => requester.get(endpoints.allBooks);

export const createBook = (data) => requester.post(endpoints.create, data);

export const myBooks = (userId) => requester.get(endpoints.currentCollection(userId));

export const getCurrentBook = (id) => requester.get(endpoints.details + id);

export const editBook = (id, data) => requester.put(endpoints.edit + id, data);

export const deleteBook = (id) => requester.del(endpoints.delete + id);