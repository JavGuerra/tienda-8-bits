# Práctica final del Bootcamp Full Stack Web Developer

Por: Javier Guerra  
Noviembre 2022

## La práctica

Ver el fichero `enunciado.pdf` para conocer el enunciado.

## Back end

__Tecnologías__: Node + Express + Mongodb + Mongoose  
__Otros módulos__: compression, cors, dotenv, nodemon, mongoose-paginator-v2

__Instalación__:
* Renombrar `.env.example` a `.env` y completar los datos requeridos
* Crear la BBDD MongoDB `practicafinal` y las colecciones `products` y `manufacturers`  
* Para la carga inicial de datos, usar: `node createdb.js`

__Modos de uso__:
* Uso en desarrollo: `npm run dev`    
* Uso en producción: `npm start`

__Ruta y puerto «dev»__: http://localhost:3000/v1/  

Ver instrucciones de uso de la API en: http://localhost:3000/

__Características destacadas__:
* Emplea módulos ESM. 
* Está preparada para el versionado de la API.  
* Está preparada para el uso de BBDD MongoDB local o en remoto (config.js).
* Devuelve las rutas de los enlaces a las fotos y logos dinámicamente.  
* Cuenta con documentación de la API.  

## Front end

__Tecnologías__: React + Vite, axios, react-router-dom, react-hook-form
__Otros módulos propios__: setSpin, inactiveBtn

__Modos de uso__:
* Uso en desarrollo: `npm run dev`  
* Para su uso en producción, construir con: `npm run build`  

__Ruta y puerto «dev»__: http://localhost:3001/

__Características destacadas__:
* ---- 

## Fuentes

* Wikipedia  
* Enciclopedia «Mi Computer», editorial Delta, 1984.  

## Licencias

Sobre el código fuente: [GNU GENERAL PUBLIC LICENSE Version 3](LICENSE)  
Sobre el contenido de la web: [(CC) BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/es/)  
Sobre las fotos: Son propiedad de sus respectivos autores.  
Material usado sin ánimo de lucro bajo criterios didácticos y formativos.  

## Saber más

Artículos informativos relacionados con esta página:  

- [Usando populate con paginate y filtrando los resultados](https://javguerra.github.io/2022-10-29-populate-paginate-fitrado/)  
- [Generar enlaces dinámicos de imágenes almacenadas en MongoDB](https://javguerra.github.io/2022-11-06-rutas-dinamicas-imagenes-mongodb/)  
