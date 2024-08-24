import mongoose from 'mongoose';

const connectDB = async (url) => {
    try {
        await mongoose.connect(url);
        console.log('Conectado a BBDD MongoDB');
    } catch (error) {
        console.error(error);
    }

    const db = mongoose.connection;

    db.on('error', error => { logError(error) });

    return db;
}

export default connectDB;
