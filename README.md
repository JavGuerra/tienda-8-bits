# Práctica final del Bootcamp Full Stack Web Developer

Por. Javier Guerra  
Noviembre 2022

## Back end

__Tecnologías__: Node + Express + Mongodb + Mongoose  
__Otros módulos__: compression, cors, dotenv, nodemon, mongoose-paginator-v2.

__Instalación__:
* Renombrar `.env.example` a `.env` y completar los datos requeridos
* Crear la BBDD MongoDB `practicafinal` y las colecciones `links` y `categories`  
* Para la carga inicial de datos, usar: `node createdb.js`

__Modos de uso__:
* Uso en desarrollo: `npm run dev`  
* Uso en desarrollo en Windows: `npm run devWin`  
* Uso en producción: `npm start`

__Rutas y puerto «dev»__: http://localhost:3000/
* Manufacturers: http://localhost:3000/manufacturers/
* Products: http://localhost:3000/products/

__Código devueltos__ (response_code):
0. OK. La consulta se ha realizado satisfactoriamente.
1. No ha habido coincidencias en la consulta. Resultado vacío.

__Notas__: 
* Preparado para el uso de BBDD MongoDB local o en remoto (config.js).
* Preparado para versionado de la API.
* Emplea módulos ESM.

## Front end

__Tecnologías__: React + Vite  
__Otros módulos__: 

__Modos de uso__:
* Uso en desarrollo: `npm run dev`  
* Para su uso en producción, construir con: `npm run build`  

__Ruta y puerto «dev»__: http://localhost:5173/

