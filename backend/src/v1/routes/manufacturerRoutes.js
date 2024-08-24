import { Router } from 'express';
import { v1GetAllManufacturers, v1GetManufacturerByBrand }
    from '../controllers/manufacturerController.js';

const v1ManufacturerRoutes = Router();

v1ManufacturerRoutes
    .get('/', v1GetAllManufacturers)
    .get('/:brand', v1GetManufacturerByBrand);

export default v1ManufacturerRoutes;