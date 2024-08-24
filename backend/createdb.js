// Script para llenar y relacionar las colecciones
// La colección products relaciona el campo manufacturer con el campo code
// de la colección manufacturers para llevar a cabo la agregación.
// Usar con: node createdb
// Nota: La BBDD y las colecciones deben estar creadas previamente

import initVars  from './src/config/vars.js';
import connectDB from './src/config/db.js';
import Product   from './src/schemas/ProductSchema.js';
import products  from './data/products.js';
import Manufacturer  from './src/schemas/ManufacturerSchema.js';
import manufacturers from './data/manufacturers.js';

( async () => {
    const { url } = await initVars();
    const db = await connectDB(url);

    console.log("Limpiando...");
    await Product.deleteMany();
    await Manufacturer.deleteMany();

    console.log("Llenando las colecciones...");
    const newManufacturers = await Manufacturer.insertMany(manufacturers);

    const newProducts = products.map(product => {
        const manufacturer = newManufacturers.filter(
            manufacturer => manufacturer.code === product.manufacturer)[0];
        const { _id, brand } = manufacturer;
        return { ...product, manufacturer: { ref: _id, brand } }
    });
    await Product.insertMany(newProducts);

    db.close(() => console.log("Conexión finalizada"));
} )();
