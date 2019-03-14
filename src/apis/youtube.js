import axios from 'axios';

const KEY = 'AIzaSyBixuasRmOCh1I_zHLVTCzoZfOhd_kWcgo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});