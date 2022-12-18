import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';

import v1ManufacturerRoutes from '../v1/routes/manufacturerRoutes.js';
import v1ProductRoutes from '../v1/routes/productRoutes.js';

export default express()

    // Middlewares

    .use(cors())
    .use(compression())
    .use(helmet({ crossOriginResourcePolicy: false }))

    .use((req, res, next) => {
        console.log('Ruta: ' + req.url);
        next();
    })

    // Routes

    .use(express.static('public'))

    .use('/v1/manufacturers', v1ManufacturerRoutes)
    .use('/v1/products', v1ProductRoutes)

    .use((req, res) => res.status(404).send('Error 404: No encontrado.'))

    .use((err, req, res, next) => {
        console.error(err.stack);
        const status = err.status || 500;
        res.status(status).send(`Error ${status}: ${err.message}.`);
    });
