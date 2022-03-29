import * as api from '../services/api.js';

const endPoints = {
    getAllCarsSorted: '/data/cars?sortBy=_createdOn%20desc',
    createCar: '/data/cars',
    loadOneCar: '/data/cars/',
    editCar: '/data/cars/',
    deleteCar: '/data/cars/',
    search: '/data/cars',
    myCars:(userId) => `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
}


export async function getAllCars() {
   return  api.get(endPoints.getAllCarsSorted); 
}

export async function createCar(data) {
   return await api.post(endPoints.createCar, data);    
}
export async function editCar(id, data) {
   return await api.put(endPoints.editCar + id, data);    
}

export async function loadOneCar(id) {
    return api.get(endPoints.loadOneCar + id);
    
}
export async function deleteCar(id) {
    return api.del(endPoints.deleteCar + id);
    
}
export async function getMyCars(userId) {
    return api.get(endPoints.myCars(userId));
    
}
export async function searchRequest(search) {
    const query = encodeURIComponent(`year=${search}`)
    return api.get(`${endPoints.search}?where=${query}`);
    
}