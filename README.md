![Logo](logo.png)  

# Práctica final del Bootcamp Full Stack Web Developer

Por: Javier Guerra  
Noviembre 2022

## La práctica

Ver el fichero [enunciado.pdf](enunciado.pdf) para conocer los requisitos de la práctica.  
Ver el fichero [presentacion.pdf](presentacion.pdf) para conocer los antecedentes de la práctica.  
Ver [info sobre la presentación](https://javguerra.github.io/2022-11-18-proyecto-final-bootcamp/) + [video](https://youtu.be/XlswjqhxJZ8).  

## Back end

__Tecnologías__: Node.JS + Express + MongoDB + Mongoose  
__Módulos__: compression, cors, helmet, dotenv, nodemon, mongoose-paginator-v2

__Instalación__:
* Renombrar `.env.example` a `.env` y completar los datos requeridos
* Crear la BBDD MongoDB `practicafinal` y las colecciones `products` y `manufacturers`  
* Para la carga inicial de datos, usar: `node createdb.js`

__Modos de uso__:
* Uso en desarrollo: `npm run dev`    
* Uso en producción: `npm start`

Ruta y puerto «dev»: http://localhost:3000/v1/  
__API disponible en__: https://api-tienda8bits.up.railway.app/v1/

Instrucciones de uso de la API en: http://localhost:3000/  
__Instrucciones disponibles en__: https://api-tienda8bits.up.railway.app/

__Características destacadas de la API__:
* Emplea módulos ESM. 
* Está preparada para el versionado de la API.  
* Está preparada para el uso de BBDD MongoDB local o en remoto (config.js).
* Preserva la seguridad del acceso a la API con el uso del módulo `helmet`.  
* Devuelve las rutas de los enlaces a las fotos y logos dinámicamente.  
* Cuenta con documentación de la API.  

## Front end

__Tecnologías__: React + Vite, axios, react-router-dom, react-hook-form  
__Módulos propios__: setSpin, inactiveBtn  

__Instalación__:
* Renombrar `.env.example` a `.env` y completar la `url` de acceso al backend
* Cambiar la ruta (`base:`) de la ubicación de la APP en el servidor en `vite.config.js`    
* Preparar la distribución de la carpeta `dist` para subir al servidor con `npm run build`  

__Modos de uso__:
* Uso en desarrollo: `npm run dev`  
* Para su uso en producción, construir con: `npm run build`  

Ruta y puerto «dev»: http://localhost:3001/proyecto/tienda8bits/  
__Aplicación disponible en__: https://javguerra.badared.com/proyecto/tienda8bits/  

__Características destacadas de la App__:
* El diseño es adaptable (responsive) según el dispositivo.  
* CSS propio. No usa frameworks.  
* Es accesible (revisado con el complemento [WAVE](https://wave.webaim.org/)).   
* Utiliza fuentes de Google Font en los títulos para preservar la accesibilidad.  
* Implementa el protocolo [Open Graph](https://ogp.me/) para la correcta inserción de la web en RRSS.  
* Es compatible con Progessive Web Aplication ([PWA](https://developer.mozilla.org/es/docs/Web/Progressive_web_apps)) a través de fichero [manifest.json](https://developer.mozilla.org/es/docs/Web/Manifest), por lo que la página puede ser instalada en dispositivos móviles como una web app.  
* Ha sido probada con los navegadores web Firefox y Chrome.  
* Tratamiento de imágenes con software libre: Gimp e InkScape.  

## Acceder a la página web

[Acceder a la página web](https://javguerra.badared.com/proyecto/tienda8bits/) de la práctica.  

![Código QR](qrcode.svg)

## Fuentes

* Wikipedia  
* Enciclopedia «Mi Computer», editorial Delta, 1984.  

## Licencias

Sobre el código fuente: [GNU GENERAL PUBLIC LICENSE Version 3](LICENSE)  
Sobre el contenido de la web: [(CC) BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/es/)  
Sobre las fotos: Son propiedad de sus respectivos autores.  
Sobre las fuentes de letra: [Google Fonts](https://fonts.google.com/)  
Sobre los iconos: [Heroicons](https://heroicons.com/)  
Material usado sin ánimo de lucro bajo criterios didácticos y formativos.  

## Saber más

Artículos informativos elaborados por el autor relacionados con esta práctica:  

- [Usando populate con paginate y filtrando los resultados](https://javguerra.github.io/2022-10-29-populate-paginate-fitrado/)  
- [Generar enlaces dinámicos de imágenes almacenadas en MongoDB](https://javguerra.github.io/2022-11-06-rutas-dinamicas-imagenes-mongodb/)  
- [Ordenando resultados en React](https://javguerra.github.io/2022-11-23-ordenacion-react/)  
