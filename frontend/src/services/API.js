import axios from 'axios';

const getData = (url) => {
    const  request = axios.get(url);
    return request.then(response => response.data);
}

export { getData };