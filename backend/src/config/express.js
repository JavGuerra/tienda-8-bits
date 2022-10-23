import express from 'express';
import cors from 'cors';
import compression from 'compression';

const expressApp = express();

// Middlewares

expressApp.use(cors);
expressApp.use(compression());
expressApp.use((req, res, next) => {
    console.log('Ruta: ' + req.url);
    next();
});

// Routes

// TODO expressApp.use('/v1', v1Router);

expressApp.use((req, res) => res.status(404).send('Error 404: No encontrado.'));

expressApp.use((err, req, res, next) => {
    console.error(err.stack);
    const status = err.status || 500;
    res.status(status).send(`Error ${status}: ${err.message}.`);
});

export default expressApp;
