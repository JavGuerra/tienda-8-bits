import { Router } from 'express';
import { v1GetFilteredProducts, v1GetProductByModel }
    from '../controllers/productController.js';

const v1ProductRoutes = Router();

v1ProductRoutes
    .get('/', v1GetFilteredProducts)
    .get('/:model', v1GetProductByModel);

export default v1ProductRoutes;