import Product from '../schemas/ProductSchema.js';

const getFilteredProducts = async (name, relevant, price, brand, page, limit) => {

    const filter = {};
    if (name ) filter.name  = { $regex: `.*${name}.*` };
    if (price) filter.price = { $lte: price };
    if (brand) filter["manufacturer.name"] = { $regex: `.*${brand}.*` };
    if (relevant) filter.relevance = { $regex: `.*${relevant}.*` };

    const populate = {path: 'manufacturer.ref', select: '-_id cif address'};

    const products = await Product.paginate(filter, { page, limit, populate });

    return products;
}

export default getFilteredProducts;