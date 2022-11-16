import Manufacturer from '../schemas/ManufacturerSchema.js';

const getAllManufacturers = async (sort) => {
    return await Manufacturer.find().sort(sort).exec();
}

const getManufacturerByBrand = async (filter) => {
    return await Manufacturer.findOne(filter).exec();
}

export { getAllManufacturers, getManufacturerByBrand };