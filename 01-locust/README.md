<h1> 01 - Locust </h1>

![Locust](https://img.shields.io/badge/Locust-gray?style=flat-square&logo=json)
![Python](https://img.shields.io/badge/Python-gray?style=flat-square&logo=python)
![Javascript](https://img.shields.io/badge/Nodejs-gray?style=flat-square&logo=javascript)

<h2> Requisitos de sección </h2>

Necesitas las siguientes herramientas para poder desarrollar esta sección del taller:

- Python
- Editor de código a elección
- NodeJS (Para realizar la prueba de locust)

<h2> Comandos utilizados </h2>

Para instalar locust en nuestra computadora utilizamos el comando:

    $ sudo pip3 install locust

Luego para verificar la versión instalada de locust:

    $ locust --version

Para poder ejecutar el archivo ```traffic.py``` y utilizar nuestro servidor locust se utiliza el siguiente comando:

    $ locust -f traffic.py

Puedes encontrar el dashboard en el siguiente enlace http://localhost:8089

Ahora para instalar todos los paquetes que se utilizaron en el desarrollo del servidor en NodeJS para probar locust es el siguiente comando:

    $ npm install

Para iniciar el servidor en el puerto 3000:

    $ node server.js
