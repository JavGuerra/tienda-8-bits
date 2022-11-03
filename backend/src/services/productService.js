import Product from '../schemas/ProductSchema.js';

const getFilteredProducts = async (
    model, relevant, price, brand, year, sort, page, limit ) => {

    const filter = {};
    if (model) filter.model = { $regex: `.*${ model }.*` };
    if (brand) filter["manufacturer.brand"] = { $regex: `.*${ brand }.*` };
    if (relevant !== undefined) filter.relevance = { $eq: relevant };
    if (price) filter.price = { $lte: price };
    if (year ) filter.year  = { $eq:  year  };

    const populate = { path: "manufacturer.ref", select: "-_id" };

    return await Product.paginate(filter, { sort, populate, page, limit });
}

export default getFilteredProducts;
