<h1> Server GRPC </h1>

![Javascript](https://img.shields.io/badge/Go-gray?style=flat-square&logo=go)

<h2> Descripción </h2>

Configuración del servidor de gRPC, el cuál se montó en un container de docker en una maquina virtual.

<h2> Requisitos </h2>

Necesitas las siguientes herramientas para poder desarrollar esta sección del taller:

- Go
- Editor de código a elección

<h2> Comandos Utilizados </h2>

Para iniciar un proyecto Go ejecutas el siguiente comando:

    $ go mod init [nombre]
    
Para instalar algún módulo necesitas ejecutar el siguiente comando:

    $ go get [ruta]

Para instalar la configuración que ya se encuentra en un archivo go.mod:

    $ go mod download

Para ejecutar un archivo go:

    $ go run [filename.go]


Te debes encontrar en esta carpeta y ejecutar los siguientes comandos para poder iniciar el servidor con Docker:

1. Crear la imagen de docker por medio del archivo Dockerfile

    ```    
    $ sudo docker build -t imagen-server .
    ```    

2. Crear el container, usando la imagen creada en el paso anterior:

    ```    
    $ sudo docker run -dit --name servergrpc -p 50051:50051 imagen-server
    ```    

