import Product from '../schemas/ProductSchema.js';

const getFilteredProducts = async (name, relevant, price, brand, year,
    sortname, sortrelevant, sortprice, sortyear, page, limit) => {

    const filter = {};
    if (name ) filter.name  = { $regex: `.*${name}.*` };
    if (year ) filter.year  = { $eq:  year  };
    if (price) filter.price = { $lte: price };
    if (brand) filter["manufacturer.name"] = { $regex: `.*${brand}.*` };
    if (relevant) filter.relevance = { $regex: `.*${relevant}.*` };

    const sort = {};

    const populate = { path: "manufacturer.ref", select: "-_id" };

    const products = await Product.paginate(filter, {sort, populate, page, limit});

    const local = process.env.HOST + ':' + process.env.PORT + '/';

    // TODO generar rutas dinámicas alterando products.

    return products;
};

export default getFilteredProducts;