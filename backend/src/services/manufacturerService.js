import Manufacturer from '../schemas/ManufacturerSchema.js';

const getAllManufacturers = async (sort, fieldsFilter) => {
    return await Manufacturer.find({}, fieldsFilter).sort(sort).exec();
}

const getManufacturerByBrand = async (filter, fieldsFilter) => {
    return await Manufacturer.findOne(filter, fieldsFilter).exec();
}

export { getAllManufacturers, getManufacturerByBrand };