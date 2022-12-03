import Product from '../schemas/ProductSchema.js';

const getFilteredProducts = async (filter, options)  => {
    return await Product.paginate(filter, { ...options, select: '-_id' });
}

const getProductByModel = async (filter, populate) => {
    return await Product.findOne(filter, {_id: 0}).populate(populate, '-_id').exec();
}

export { getFilteredProducts, getProductByModel };
