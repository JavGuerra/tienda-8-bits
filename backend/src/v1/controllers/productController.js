import getFilteredProducts from '../../services/productService.js';

const v1GetFilteredProducts = async (req, res) => {
    let { name, relevant, price, brand, page = 1, limit = 10 } = req.query;

    if (name ) name  = name.trim().toUpperCase();
    if (price) price = price.trim();
    if (brand) brand = brand.trim().toUpperCase();
    if (relevant) relevant = relevant.trim().toLowerCase();
    if (isNaN(page ) || page  < 1) page  = 1;
    if (isNaN(limit) || limit < 1) limit = 10;

    const result = await getFilteredProducts(name, relevant, price, brand, page, limit);
    const response_code = (result.docs.length) ? 0 : 1;
    res.json({ response_code, result });
};

export default v1GetFilteredProducts;