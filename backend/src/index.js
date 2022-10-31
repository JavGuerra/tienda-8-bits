import initVars  from './config/config.js';
import connectDB from './config/db.js';
import connectHttpServer from './config/http.js';

( async () => {
    const { url, port } = await initVars();
    await connectDB(url);
    connectHttpServer(port);
} )();
