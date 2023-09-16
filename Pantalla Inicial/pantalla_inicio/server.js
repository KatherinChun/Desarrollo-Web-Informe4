require('dotenv').config(); //instancia el archivo .env
const http = require('http');     //importa http
const app = require('./index');     //trae el index.js
const server = http.createServer(app);   //crea el servidor con el index.js

server.listen(process.env.PORT);        //escucha el puerto que esta en el archivo .env
 




