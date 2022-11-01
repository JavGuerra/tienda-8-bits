import Product from '../schemas/ProductSchema.js';

const getFilteredProducts = async (name, relevant, price, brand, year,
    sortName, sortRelevant, sortPrice, sortYear, page, limit) => {

    const filter = {};
    if (price) filter.price = { $lte: price };
    if (year ) filter.year  = { $eq:  year  };
    if (name ) filter.name  = { $regex: `.*${name}.*` };
    if (relevant) filter.relevance = { $eq: relevant };
    if (brand) filter["manufacturer.name"] = { $regex: `.*${brand}.*` };

    const sort = {name: sortName, relevance: sortRelevant, price: sortPrice, year: sortYear};

    const populate = { path: "manufacturer.ref", select: "-_id" };

    const products = await Product.paginate(filter, {sort, populate, page, limit});

    if (products.docs.length) {
        const local = process.env.HOST + ':' + process.env.PORT + '/';
        // TODO para cada documento del resultado:
        // result.photo = local + 'photo/' + result.logo;
        // result.ref.logo = local + 'logo/' + result.ref.logo;
    }

    return products;
};

export default getFilteredProducts;
