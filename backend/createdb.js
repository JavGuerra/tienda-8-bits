// Usar con: node createdb
// Nota: La BBDD y las colecciones deben estar creadas previamente

import initVars  from './src/config/config.js';
import connectDB from './src/config/db.js';

import Product   from './src/schemas/ProductSchema';
import products  from './data/products';
import Manufacturer  from './src/schemas/ManufacturerSchema';
import manufacturers from './data/manufacturers';

const createdb = async () => {
    const { url } = await initVars();
    const db = await connectDB(url);

    console.log('Limpiando...');
    await Product.deleteMany({});
    await Manufacturer.deleteMany({});

    console.log('Llenando las colecciones...');
    const newManufacturers = await Manufacturer.insertMany(manufacturers);

    const newProducts = products.map( product => {
        const manufacturer = newManufacturers.filter(
            manufacturer => manufacturer.cif === product.manufacturer)[0];
        const { _id, name } = manufacturer;
        return {
            ...product,
            manufacturer: { ref: _id, name }
        };
    });
    await Product.insertMany(newProducts);

    db.disconnect();
    console.log('Conexión finalizada');
};

createdb();
