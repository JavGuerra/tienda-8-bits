import { getAllManufacturers, getManufacturerByBrand }
    from '../../services/manufacturerService.js';

const v1GetAllManufacturers = async (req, res) => {
    const result = await getAllManufacturers();
    const response_code = (result.length) ? 0 : 1;
    res.json({response_code, result});
};

const v1GetManufacturerByBrand = async (req, res) => {
    const brand = req.params.brand.trim().toUpperCase();
    const result = await getManufacturerByBrand(brand);
    const response_code = (result !== null) ? 0 : 1;
    res.json({response_code, result});
};

export { v1GetAllManufacturers, v1GetManufacturerByBrand };