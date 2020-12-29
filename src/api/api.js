import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
});

const api = {
    post: async (path, body) => {
        try {
            const resp = await instance.post(path, body);
            return resp.data;
        } catch (e) {
            console.error(e)
        }
    }
}

export default api