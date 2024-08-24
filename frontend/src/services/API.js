import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const getData = (params) => {
    const  request = axios.get(apiUrl + params);
    return request.then(response => response.data);
}

export { getData };