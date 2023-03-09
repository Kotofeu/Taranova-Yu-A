import axios from 'axios';

export const $conection = axios.create({
    baseURL: 'https://api.vk.com/method/wall.get'
});
export const $conectionTest = axios.create({
    baseURL: 'http://jservice.io/api/random'
});