import getFilteredProducts from "../../services/productService.js";

const v1GetFilteredProducts = async (req, res) => {
    let { name, relevant, price, brand, year, sortname = 0, sortrelevant = 0,
        sortprice = 0, sortyear = 0, page = 1, limit = 10, } = req.query;

    if (name ) name  = name.trim().toUpperCase();
    if (brand) brand = brand.trim().toUpperCase();
    // if (price) price = price.trim();
    // if (year ) year  = year.trim();
    // if (page ) page  = page.trim();
    // if (limit) limit = limit.trim();
    // if (sortname ) sortname  = sortname.trim();
    // if (sortprice) sortprice = sortprice.trim();
    // if (sortyear ) sortyear  = sortyear.trim();
    // if (sortrelevant) sortrelevant = sortrelevant.trim();
    if (isNaN(page ) || page  < 1) page = 1;
    if (isNaN(limit) || limit < 1 || limit > 10) limit = 10;
    if (isNaN(year ) || year  < 1970 || year > 1990) year = null;
    if (isNaN(relevant ) || relevant  < 0 || relevant  > 1) relevant  = 0;
    if (isNaN(sortname ) || sortname  < 0 || sortname  > 1) sortname  = 0;
    if (isNaN(sortprice) || sortprice < 0 || sortprice > 1) sortprice = 0;
    if (isNaN(sortyear ) || sortyear  < 0 || sortyear  > 1) sortyear  = 0;
    if (isNaN(sortrelevant) || sortrelevant < 0 || sortrelevant > 1) sortrelevant = 0;

    const result = await getFilteredProducts(name, relevant, price, brand, year,
        sortname, sortrelevant, sortprice, sortyear, page, limit);

    const response_code = result.docs.length ? 0 : 1;

    res.json({ response_code, result });
};

export default v1GetFilteredProducts;
