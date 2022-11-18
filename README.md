# **APIS STAR WARS**
Bienvenido al swapi, la API de Star Wars! Esta documentación debería ayudarle a familiarizarse con los recursos disponibles y cómo consumirlos con solicitudes HTTP. Si buscas una biblioteca auxiliar nativa, te sugiero que te desplaces hacia abajo y revises lo que está disponible. Lea la sección de introducción antes de sumergirse. La mayoría de sus problemas deben resolverse simplemente leyéndolos.

## Getting Started
* cree un usuario en aws con permisos especificos en este caso le di todos los permisos administrativos,
    genere un acceskey y pass key
* instale AWSCLIV2.msi  instale el la herramienta para instalar comando nuevo de aws
* aws --version      para saber si esta instalado
* aws configure para configurar el acces key y el pass key
* npm install -g serverless    instalas el framework serverless directo en el cmd
* serverless    vas a cd desktop y ejecutas el comando
* HTTP API  seleccionas para generar el proyecto
* serverless deploy para subir los cambios o sls deploy --verbose tambien sirve para deployar
* npm install middy  el modulo sirve para crear paquetes dentro del framework, y procesar datos antes de que llegue a un paquete principal
aws configure , credenciales de aws

### Pre-requisites
Se necesita: 

* dynamoDB
* version aws aws-cli/2.8.12
* node -v v16.13.1

### Installation

1. Instalar los componentes
```
* instale AWSCLIV2.msi
* npm i @aws-sdk
* npm i uuid
```

2. Clona el repositorio
```
    https://github.com/brayanbst/AWS-STARTWARS.git
```


## **Bases de datos**

**DynamoDB**
Cuenta con una bases de datos, *GeneralTable*, esta contiene la informacion de Planetas Star Wars.

## **Endpoints**

| HTTP Verb | URL                                    				   | Descripcion                            |
|-----------|----------------------------------------------------------|----------------------------------------|
| **GET**   | http://127.0.0.1:3009/v1/packages/:packageId             | Obtener un Planeta en especifico                    |
| **GET**   | https://6rcu7i68kb.execute-api.us-west-2.amazonaws.com/planets | Obtener Listado de Planetas  |
| **POST**  | https://6rcu7i68kb.execute-api.us-west-2.amazonaws.com/planets  | Crear un nuevo planeta          |
| **PUT**   | https://6rcu7i68kb.execute-api.us-west-2.amazonaws.com/planets/{id}  | Actualiza un planeta en especifico   |

## **Documentacion Postman**

https://documenter.getpostman.com/view/7156757/2s8YmPuNXu#intro

### Globales