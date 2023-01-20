import axios from "axios";

const instance = axios.create({
    baseURL: 'https://63c674a4dcdc478e15c1ca96.mockapi.io/photos'
});

export const photosApi = {
    async fetchPhotos(id, page) {
        return instance.get(`?page=${page}&limit=3${id === 0 ? '' : `&category=${id}`}`);
    },
}