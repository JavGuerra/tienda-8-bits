import express from 'express';
import cors from 'cors';
import compression from 'compression';

import v1ManufacturerRoutes from '../v1/routes/manufacturerRoutes.js';
import v1ProductRoutes from '../v1/routes/productRoutes.js';

const expressApp = express();

// Middlewares

expressApp.use(cors());
expressApp.use(compression());
expressApp.use((req, res, next) => {
    console.log('Ruta: ' + req.url);
    next();
});

// Routes

expressApp.use('/v1/manufacturers', v1ManufacturerRoutes);
expressApp.use('/v1/products', v1ProductRoutes);

expressApp.use((req, res) => res.status(404).send('Error 404: No encontrado.'));

expressApp.use((err, req, res, next) => {
    console.error(err.stack);
    const status = err.status || 500;
    res.status(status).send(`Error ${status}: ${err.message}.`);
});

export default expressApp;
