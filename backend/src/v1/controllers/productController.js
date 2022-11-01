import getFilteredProducts from "../../services/productService.js";

const v1GetFilteredProducts = async (req, res) => {
    let { name, relevant, price, brand, year, sortName = 1, sortRelevant = 1,
        sortPrice = 1, sortYear = 1, page = 1, limit = 10, } = req.query;

    if (name ) name  = name.trim().toUpperCase();
    if (brand) brand = brand.trim().toUpperCase();
    if (isNaN(page ) || page  < 1) page = 1;
    if (isNaN(limit) || limit < 1 || limit > 10) limit = 10;
    if (isNaN(year ) || year  < 1970 || year > 1990) year = null;
    if (isNaN(relevant ) || relevant  < 0 || relevant  > 3) relevant  = 1;
    if (isNaN(sortName ) || sortName  !== 1 || sortName  !== -1) sortName  = 1;
    if (isNaN(sortPrice) || sortPrice !== 1 || sortPrice !== -1) sortPrice = 1;
    if (isNaN(sortYear ) || sortYear  !== 1 || sortYear  !== -1) sortYear  = 1;
    if (isNaN(sortRelevant) || sortRelevant !== 1 || sortRelevant !== -1) sortRelevant = 0;

    const result = await getFilteredProducts(name, relevant, price, brand, year,
        sortName, sortRelevant, sortPrice, sortYear, page, limit);

    const response_code = result.docs.length ? 0 : 1;

    res.json({ response_code, result });
};

export default v1GetFilteredProducts;
