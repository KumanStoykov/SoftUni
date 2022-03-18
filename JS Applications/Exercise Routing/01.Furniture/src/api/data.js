import { getUserData } from '../util.js';
import * as api from './api.js';


const endpoints = {
    allFurniture: '/data/catalog',
    create: '/data/catalog',
    getOneId: '/data/catalog',
    editItem: '/data/catalog',
    deleteItem: '/data/catalog',
    myFurniture: (id) => `/data/catalog?where=_ownerId%3D%22${id}%22`,

};

export async function getAllFurniture() {
    return api.get(endpoints.allFurniture);
}

export async function makeCreate(data) {
    return api.post(endpoints.create, data);
}

export async function getOneId(id) {
    return api.get(`${endpoints.getOneId}/${id}`);
}

export async function editItem(id, data) {
    return api.put(`${endpoints.editItem}/${id}`, data);
}

export async function deleteItem(id) {
    return api.del(`${endpoints.editItem}/${id}`);
}

export async function loadMyFurniture() {
    const userData =  getUserData();
    return api.get(endpoints.myFurniture(userData._id));
}