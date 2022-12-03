import Manufacturer from '../schemas/ManufacturerSchema.js';

const getAllManufacturers = async (sort) => {
    return await Manufacturer.find({}, {_id: 0}).sort(sort).exec();
}

const getManufacturerByBrand = async (filter) => {
    return await Manufacturer.findOne(filter, {_id: 0}).exec();
}

export { getAllManufacturers, getManufacturerByBrand };