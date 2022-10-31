import { Router } from 'express';
import v1GetFilteredProducts from '../controllers/productController.js';

const v1ProductRoutes = Router();

v1ProductRoutes.get('/', v1GetFilteredProducts);

export default v1ProductRoutes;