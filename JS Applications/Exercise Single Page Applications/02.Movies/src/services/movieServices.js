import * as requests from './requester.js';

const endpoints = {
    allMovies: '/data/movies',
    detailsMovie: '/data/movies/',
    deleteMovies: '/data/movies/',
    editMovies: '/data/movies/',
    createMovies: '/data/movies',
}

export const getAllMovies = () => requests.get(endpoints.allMovies);

export const getDetailsMovie = (id) => requests.get(endpoints.detailsMovie + id);

export const deleteMovie = (id) => requests.del(endpoints.deleteMovies + id);

export const editMovie = (id, data) => requests.put(endpoints.editMovies + id, data);

export const createMovie = ( data) => requests.post(endpoints.createMovies, data);
