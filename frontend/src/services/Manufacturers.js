import axios from 'axios';

const getAllManufacturers = (url) => {
    const request = axios.get(url);
    return request.then(response => response.data);
}

export default getAllManufacturers;