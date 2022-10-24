import express from 'express';
import cors from 'cors';
import compression from 'compression';

import v1CategoryRoutes from '../v1/routes/categoryRoutes.js';
import v1LinkRoutes from '../v1/routes/linkRoutes.js';

const expressApp = express();

// Middlewares

expressApp.use(cors);
expressApp.use(compression());
expressApp.use((req, res, next) => {
    console.log('Ruta: ' + req.url);
    next();
});

// Routes

expressApp.use('/v1/categories', v1CategoryRoutes);
expressApp.use('/v1/links', v1LinkRoutes);

expressApp.use((req, res) => res.status(404).send('Error 404: No encontrado.'));

expressApp.use((err, req, res, next) => {
    console.error(err.stack);
    const status = err.status || 500;
    res.status(status).send(`Error ${status}: ${err.message}.`);
});

export default expressApp;
