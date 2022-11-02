import { getAllManufacturers, getManufacturerByBrand }
    from '../../services/manufacturerService.js';

const insertRoutes = data => {
    const local = process.env.HOST + ':' + process.env.PORT + '/';
    // TODO data[0].logo = local + 'logo/' + data[0].logo;
    return data;
}

const v1GetAllManufacturers = async (req, res) => {
    let result = await getAllManufacturers();
    const response_code = (result.length) ? 0 : 1;
    if (response_code === 0) result = insertRoutes(result);
    res.json({response_code, result});
};

const v1GetManufacturerByBrand = async (req, res) => {
    const brand = req.params.brand.trim().toUpperCase();
    let result = await getManufacturerByBrand(brand);
    const response_code = (result !== null) ? 0 : 1;
    if (response_code === 0) result = insertRoutes(result);
    res.json({response_code, result});
};

export { v1GetAllManufacturers, v1GetManufacturerByBrand };