import Manufacturer from '../schemas/manufacturerSchema.js';

const getAllManufacturers = async () => {
    return await Manufacturer.find({}).exec();
}

export default getAllManufacturers;