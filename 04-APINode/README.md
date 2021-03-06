<h1> API NodeJS </h1>

![Javascript](https://img.shields.io/badge/NodeJS-gray?style=flat-square&logo=javascript)
![Javascript](https://img.shields.io/badge/Express-gray?style=flat-square&logo=express)
![Javascript](https://img.shields.io/badge/MongoDB-gray?style=flat-square&logo=mongodb)

<h2> Descripción </h2>

API que conectará nuestra base de datos con el frontend (React), para mostrar los datos.

<h2> Requisitos </h2>

Necesitas las siguientes herramientas para poder desarrollar esta sección del taller:

- NodeJS
- MongoDB
- Editor de código a elección

<h2> Comandos Utilizados </h2>

Para iniciar un proyecto Node ejecutas el siguiente comando:

    $ npm init

Para instalar paquetes que usaremos se utiliza el siguiente comando:

    $ npm install [paquete]

Para instalar todos los paquetes que se encuentran en nuestro archivo ```package.json``` utilizamos el comando:

    $ npm install

Para ejecutar nuestro servidor con la herramienta de desarrollo nodemon, utilizamos:

    $ nodemon [filename]

Para ejecutar nuestro servidor con node utilizamos:

    $ node [filename]

Te debes encontrar en esta carpeta y ejecutar los siguientes comandos para poder iniciar el servidor con Docker:

1. Crear la imagen de docker por medio del archivo Dockerfile

    ```    
    $ sudo docker build -t imagen-api .
    ```    

2. Crear el container, usando la imagen creada en el paso anterior:

    ```    
    $ sudo docker run -dit --name apinode -p 4000:4000 imagen-api
    ```    

