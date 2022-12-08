import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const getData = (route) => {
    const  request = axios.get(apiUrl + route);
    return request.then(response => response.data);
}

export { getData };