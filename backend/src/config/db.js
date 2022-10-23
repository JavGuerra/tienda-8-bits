import mongoose from 'mongoose';

const connectDB = async (url) => {
    const db = await mongoose.connect(url);
    console.log('Conectado a BBDD MongoDB');
    return db;
}

export default connectDB;
