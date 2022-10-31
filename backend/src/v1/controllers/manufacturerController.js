import getAllManufacturers from '../../services/manufacturerService.js';

const v1GetAllManufacturers = async (req, res) => {
    const result = await getAllManufacturers();
    const response_code = (result.length) ? 0 : 1;
    res.json({response_code, result});
};

export default v1GetAllManufacturers;