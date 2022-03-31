import * as requester from './requester.js';

const endpoints = {
    add: '/data/likes',
    countOfLikes: (bookId) => `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`,
    hasLiked: (bookId, userId) => `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
    
}

export const addLike = (bookId) => requester.post(endpoints.add, bookId);

export const getCountOfLikes = (bookId) => requester.get(endpoints.countOfLikes(bookId));

export const isLiked = (bookId, userId) => requester.get(endpoints.hasLiked(bookId, userId));