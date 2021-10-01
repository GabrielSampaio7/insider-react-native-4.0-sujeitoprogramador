import axios from 'axios';

export const key = '4c8e1bef7cf47126bff2279bef8ef0bc';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;