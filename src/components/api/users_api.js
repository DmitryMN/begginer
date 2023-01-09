import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reqres.in/api/',
});

export const usersApi = {
    async fetchUsers() {
        return instance.get('/users');
    }
}