import { getAllManufacturers, getManufacturerByBrand }
    from '../../services/manufacturerService.js';

const insertRoutes = data => {
    const url = process.env.HOST + ':' + process.env.PORT + '/';
    data.forEach( element => element.logo = url + 'logo/' + element.logo );
    return data;
}

const v1GetAllManufacturers = async (req, res) => {
    let result = await getAllManufacturers();
    const response_code = (result.length) ? 0 : 1;
    if (response_code === 0) result = insertRoutes(result);
    res.json({response_code, result});
}

const v1GetManufacturerByBrand = async (req, res) => {
    const brand  = req.params.brand.trim().toUpperCase();
    const filter = { brand: { $regex: `.*${brand}.*` } };
    let result = await getManufacturerByBrand(filter);
    const response_code = (result !== null) ? 0 : 1;
    if (response_code === 0) result = insertRoutes([result]);
    res.json({response_code, result});
}

export { v1GetAllManufacturers, v1GetManufacturerByBrand };