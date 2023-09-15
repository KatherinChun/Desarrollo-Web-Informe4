const express = require('express');   //importa express
var cors = require('cors');       //importa cors
const connection = require('./connection');  //trae la conexion con la base de datos
const userR = require('./routes/userR');  //trae las rutas
const app = express();

app.use(cors());  //para que no haya problemas de CORS
app.use(express.urlencoded({ extended: true })); //para que pueda leer los datos que vienen de un formulario
app.use(express.json());
app.use('/userR', userR);  //para que pueda usar las rutas

module.exports = app;   //nos traera todos los datos. 

