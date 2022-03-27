import * as requests from './requester.js';

const endpoints = {
    getNumbersOfLikes: (id) => `/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`,
    getLikesFromUser: (movieId, userId) => `/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`,
    addLike: '/data/likes',
    revokeLike: '/data/likes/',
}

export const getNumbersOfLikes = (id) => requests.get(`/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);

export const getLikesFromUser = (movieId, userId) => requests.get(endpoints.getLikesFromUser(movieId, userId));

export const addLike = (data) => requests.post(endpoints.addLike, data);

export const revokeLike = (id) => requests.del(endpoints.revokeLike + id);
