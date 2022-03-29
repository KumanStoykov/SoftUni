import * as api from './api.js';

const endpoints = {
    allGames: '/data/games?sortBy=_createdOn%20desc',
    threeGames: '/data/games?sortBy=_createdOn%20desc&distinct=category&pageSize=3',
    createGame: '/data/games',
    currentGame: '/data/games/',
    deleteGame: '/data/games/',
    editGame: '/data/games/',
    getComments: (id) => `/data/comments?where=gameId%3D%22${id}%22`,
    postComments: '/data/comments',

};

export const getAllGames = async () =>  await api.get(endpoints.allGames);

export const getThreeGames = async () =>  await api.get(endpoints.threeGames);

export const getOneGame = async (id) =>  await api.get(endpoints.currentGame + id);

export const createGameRequest = async (data) => {

   return await api.post(endpoints.createGame, data);

};

export const deleteGame = async (id) =>  await api.del(endpoints.currentGame + id);

export const editGame = async (id, data) =>  await api.put(endpoints.editGame + id, data);

//Comments

export const getAllComments = async (id) =>  await api.get(endpoints.getComments(id));
export const postComments = async (data) =>  await api.post(endpoints.postComments,  data);
