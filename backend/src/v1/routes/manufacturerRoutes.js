import express from 'express';
import v1GetAllManufacturers from '../controllers/manufacturerController.js';

const v1ManufacturerRoutes = express.Router();

v1ManufacturerRoutes.get('/', v1GetAllManufacturers);

export default v1ManufacturerRoutes;