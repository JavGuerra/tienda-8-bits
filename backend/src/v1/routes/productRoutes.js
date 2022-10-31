import express from 'express';
import v1GetFilteredProducts from '../controllers/productController';

const v1ProductRoutes = express.Router();

v1ProductRoutes.get('/', v1GetFilteredProducts);

export default v1ProductRoutes;