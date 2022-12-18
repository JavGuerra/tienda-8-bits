import { Router } from 'express';
import { v1GetFilteredProducts, v1GetProductByModel }
    from '../controllers/productController.js';

export default Router()
    .get('/', v1GetFilteredProducts)
    .get('/:model', v1GetProductByModel);
