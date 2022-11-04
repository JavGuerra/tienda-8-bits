import Product from '../schemas/ProductSchema.js';

const getFilteredProducts = async ( filter, options ) => {
    return await Product.paginate(filter, options);
}

export default getFilteredProducts;
