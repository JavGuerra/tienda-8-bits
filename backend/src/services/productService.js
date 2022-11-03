import Product from '../schemas/ProductSchema.js';

const getFilteredProducts = async (
    name, relevant, price, brand, year, sort, page, limit ) => {

    const filter = {};
    if (name ) filter.name  = { $regex: `.*${ name }.*` };
    if (brand) filter["manufacturer.name"] = { $regex: `.*${ brand }.*` };
    if (relevant !== undefined) filter.relevance = { $eq: relevant };
    if (price) filter.price = { $lte: price };
    if (year ) filter.year  = { $eq:  year  };

    const populate = { path: "manufacturer.ref", select: "-_id" };

    return await Product.paginate(filter, { sort, populate, page, limit });
}

export default getFilteredProducts;
