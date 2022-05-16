import * as requester from './requester';

const endpoints = {
    getAll: '/estate'
}

export const getAllEstate = () => requester.get(endpoints.getAll);