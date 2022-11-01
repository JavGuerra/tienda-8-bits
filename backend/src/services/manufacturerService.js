import Manufacturer from '../schemas/ManufacturerSchema.js';

const getAllManufacturers = async () => {
    return await Manufacturer.find({}).exec();
}

const getManufacturerByBrand = async (brand) => {
    const filter = { name: { $regex: `.*${brand}.*` } };
    const result = await Manufacturer.findOne(filter).exec();

    if (result !== null) {
        const local = process.env.HOST + ':' + process.env.PORT + '/';
        result.logo = local + 'logo/' + result.logo;
    }

    return result;
}

export { getAllManufacturers, getManufacturerByBrand };