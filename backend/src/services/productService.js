import Product from "../schemas/ProductSchema.js";

const getFilteredProducts = async (filter, options) => {
    return await Product.paginate(filter, options);
};

const getProductByModel = async (
    filter, fieldsFilter, populate, fieldsPopulate ) => {
    return await Product.findOne(filter, fieldsFilter)
        .populate(populate, fieldsPopulate).exec();
};

export { getFilteredProducts, getProductByModel };
