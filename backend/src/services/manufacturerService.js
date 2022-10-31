import Manufacturer from '../schemas/ManufacturerSchema.js';

const getAllManufacturers = async () => {
    return await Manufacturer.find({}).exec();
}

export default getAllManufacturers;