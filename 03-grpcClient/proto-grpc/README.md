<h1> GRPC Configuration </h1>

![Javascript](https://img.shields.io/badge/Go-gray?style=flat-square&logo=go)
![Javascript](https://img.shields.io/badge/Protocol_Buffer-gray?style=flat-square&logo=buffer)

<h2> Descripción </h2>

Se configuraron los servicios para manejar el servidor GRPC, donde tenemos un mensaje de respuesta y un mensaje de petición. Los cuales se utilizan en un servicio.

<h2> Requisitos </h2>

Se instalaron los siguientes componentes:

1.  Instalar la herramienta protobuf para compilar el archivo ```~.proto```

    ```    
    sudo apt install protobuf-compiler
    ```

2. Ejecutar el comando para compilar el archivo y convertirlo a código ```~.proto```

    ```
    protoc --go_out=plugins=grpc:. ~.proto
    ```

    2.1 En caso de obtener un error como el  siguiente: ```protoc-gen-go: program not found or is not executable``` ejecutar el siguiente comando:

    ```
    sudo apt install golang-goprotobuf-dev
    ```
