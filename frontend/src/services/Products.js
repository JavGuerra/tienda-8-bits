import axios from 'axios';

const getFilteredProducts = (url) => {
    const request = axios.get(url);
    return request.then(response => response.data);
}

export default getFilteredProducts;