import Manufacturer from '../schemas/ManufacturerSchema.js';

const getAllManufacturers = async () => {
    return await Manufacturer.find().exec();
}

const getManufacturerByBrand = async (brand) => {
    const filter = { name: { $regex: `.*${brand}.*` } };
    return await Manufacturer.findOne(filter).exec();
}

export { getAllManufacturers, getManufacturerByBrand };