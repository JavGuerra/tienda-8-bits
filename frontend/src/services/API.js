import axios from 'axios';

const baseUrl = 'https://api-tienda8bits.up.railway.app/v1/';

const getData = (route) => {
    const  request = axios.get(baseUrl + route);
    return request.then(response => response.data);
}

export { getData };