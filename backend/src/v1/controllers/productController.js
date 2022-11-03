import getFilteredProducts from "../../services/productService.js";

const insertRoutes = data => {
    const url = process.env.HOST + ':' + process.env.PORT + '/';
    data.docs.forEach(element => {
        element.photo = url + 'photo/' + element.photo;
        element.manufacturer.ref.logo = url + 'logo/' + element.manufacturer.ref.logo;
    });
    return data;
}

const v1GetFilteredProducts = async (req, res) => {
    let { name, relevant, price, brand, year, sortname = 1, sortrelevant = 1,
        sortprice = 1, sortyear = 1, page = 1, limit = 10, } = req.query;

    if (name ) name  = name.trim().toUpperCase();
    if (brand) brand = brand.trim().toUpperCase();
    if (relevant !== true || relevant !== false) relevant = false;
    if (isNaN(price) || price <= 0) price = null;
    if (isNaN(page ) || page  < 1 ) page = 1;
    if (isNaN(limit) || limit < 1 || limit > 10) limit = 10;
    if (isNaN(year ) || year  < 1970 || year > 1990) year = null;
    if (isNaN(sortname ) || sortname  !== 1 || sortname  !== -1) sortname  = 1;
    if (isNaN(sortprice) || sortprice !== 1 || sortprice !== -1) sortprice = 1;
    if (isNaN(sortyear ) || sortyear  !== 1 || sortyear  !== -1) sortyear  = 1;
    if (isNaN(sortrelevant) || sortrelevant !== 1 || sortrelevant !== -1) sortrelevant = 0;

    let result = await getFilteredProducts(name, relevant, price, brand, year,
        sortname, sortrelevant, sortprice, sortyear, page, limit);

    const response_code = result.docs.length ? 0 : 1;
    if (response_code === 0) result = insertRoutes(result);
    res.json({ response_code, result });
};

export default v1GetFilteredProducts;
