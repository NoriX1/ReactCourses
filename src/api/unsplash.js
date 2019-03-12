import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1971b37bb3960e5ec3a48b55c97551a544cc0efd4dd08416490990e7a157591a'
    }
});