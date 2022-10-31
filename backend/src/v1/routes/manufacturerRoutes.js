import { Router } from 'express';
import v1GetAllManufacturers from '../controllers/manufacturerController.js';

const v1ManufacturerRoutes = Router();

v1ManufacturerRoutes.get('/', v1GetAllManufacturers);

export default v1ManufacturerRoutes;