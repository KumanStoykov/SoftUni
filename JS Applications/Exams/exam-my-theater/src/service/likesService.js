import * as api from './requester.js';

const endpoints = {
    getAll: (theaterId) =>`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`,
    hasLiked: (theaterId, userId) =>`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
    like:`/data/likes`,
   
}

export const getCountLikes = (id) => api.get(endpoints.getAll(id));

export const getLikesFromUser = (theaterId, userId) => api.get(endpoints.hasLiked(theaterId, userId));

export const addLike = (data) => api.post(endpoints.like, data);
