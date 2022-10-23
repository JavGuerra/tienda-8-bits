// Usar con: node createdb
// Nota: La BBDD y las colecciones deben estar creadas previamente

import initVars  from './src/config/config.js';
import connectDB from './src/config/db.js';

const Category = require('./src/schemas/Category-schema');
const Link = require('./src/schemas/Link-schema');
const categories = require('./data/categories');
const links = require('./data/links');

const createdb = async () => {
    const { url } = await initVars();
    const db = await connectDB(url);

    console.log('Limpiando...');
    await Category.deleteMany({});
    await Link.deleteMany({});

    console.log('Llenando las colecciones...');
    const newCategories = await Category.insertMany(categories);

    const newLinks = links.map( link => {
        const category = newCategories.filter(
            category => category.category === link.category)[0];
        const { _id } = category;
        return {
            ...link,
            category: { _id }
        };
    });
    await Link.insertMany(newLinks);

    db.disconnect();
    console.log('Conexión finalizada');
};

createdb();
