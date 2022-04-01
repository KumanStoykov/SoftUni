import * as requester from './requester.js';


const endpoints = {
    create: '/data/memes',
    allMemes: '/data/memes?sortBy=_createdOn%20desc',
    oneMeme: '/data/memes/',
    edit: '/data/memes/',
    delete: '/data/memes/',
    profile: (userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
}

export const createMeme = (data) => requester.post(endpoints.create, data);

export const getAllMemes = () => requester.get(endpoints.allMemes);

export const currentMeme = (id) => requester.get(endpoints.oneMeme + id);

export const editMeme = (id, data) => requester.put(endpoints.oneMeme + id, data);

export const deleteMeme = (id) => requester.del(endpoints.oneMeme + id);

export const getMyProfile = (id) => requester.get(endpoints.profile(id));