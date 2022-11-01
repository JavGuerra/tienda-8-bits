import { Router } from 'express';
import { v1GetAllManufacturers, v1GetManufacturer }
    from '../controllers/manufacturerController.js';

const v1ManufacturerRoutes = Router();

v1ManufacturerRoutes.get('/', v1GetAllManufacturers);
v1ManufacturerRoutes.get('/:brand', v1GetManufacturer);

export default v1ManufacturerRoutes;