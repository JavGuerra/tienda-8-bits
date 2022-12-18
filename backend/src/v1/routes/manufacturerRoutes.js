import { Router } from 'express';
import { v1GetAllManufacturers, v1GetManufacturerByBrand }
    from '../controllers/manufacturerController.js';

export default Router()
    .get('/', v1GetAllManufacturers)
    .get('/:brand', v1GetManufacturerByBrand);
