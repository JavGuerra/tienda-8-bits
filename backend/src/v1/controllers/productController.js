import getFilteredProducts from "../../services/productService.js";

const stringToBoolean = data => data === "true";

const insertRoutes = data => {
    const url = process.env.HOST + ':' + process.env.PORT + '/';
    data.docs.forEach(element => {
        element.photo = url + 'photo/' + element.photo;
        if (!element.manufacturer.ref.logo.includes(url)) 
            element.manufacturer.ref.logo = url + 'logo/' + element.manufacturer.ref.logo;
    });
    return data;
}

const v1GetFilteredProducts = async (req, res) => {
    let { model, brand, price, year, relevant, sortmodel, sortprice, sortyear,
        page = 1, limit = 12 } = req.query;

    if (relevant) relevant = stringToBoolean(relevant.trim().toLowerCase());
    if (model) model = model.trim().toUpperCase();
    if (brand) brand = brand.trim().toUpperCase();
    if (isNaN(price) || price <= 0) price = null;
    if (isNaN(page ) || page  < 1 ) page = 1;
    if (isNaN(limit) || limit < 1 || limit > 24) limit = 12;
    if (isNaN(year ) || year  < 1970 || year > 1990) year = null;
    if (sortmodel && sortmodel !== '-1') sortmodel = 1;
    if (sortprice && sortprice !== '-1') sortprice = 1;
    if (sortyear  && sortyear  !== '-1') sortyear  = 1;

    const filter = {};
    if (model) filter.model = { $regex: `.*${ model }.*` };
    if (relevant) filter.relevance = { $eq: relevant };
    if (price) filter.price = { $lte: price };
    if (brand) filter["manufacturer.brand"] = { $regex: `.*${ brand }.*` };
    if (year ) filter.year  = { $eq:  year  };

    const sort = {};
    if (sortmodel) sort.model = Number(sortmodel);
    if (sortprice) sort.price = Number(sortprice);
    if (sortyear ) sort.year  = Number(sortyear );
    
    const populate = { path: "manufacturer.ref", select: "-_id" };

    const options  = { sort, populate, page, limit };

    let result = await getFilteredProducts( filter, options );
    const response_code = result.docs.length ? 0 : 1;
    if (response_code === 0) result = insertRoutes(result);
    res.json({ response_code, result });
}

export default v1GetFilteredProducts;
