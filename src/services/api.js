import axios from 'axios';

const requestHelper = axios.create({
    baseURL: 'http://localhost:3001'
});
const routes = {
    users: {
        get: () => requestHelper({
            url: 'users',
            method: 'get'
        }),
        create: data => requestHelper({
            url: 'users',
            method: 'post',
            data
        })
    },
    posts: {
        get: () => requestHelper({
            url: 'posts',
            method: 'get'
        }),
        create: data => requestHelper({
            url: 'posts',
            method: 'post',
            data
        })
    }
}

export default routes;