import expressApp from './express.js';
import { createServer } from 'http';

const connectHttpServer = (port) => {
    createServer(expressApp).listen(port, () => {
        console.log(`Servidor HTTP en puerto ${port}`);
    });
}

export default connectHttpServer;
