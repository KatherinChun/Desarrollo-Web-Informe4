const mysql = require('mysql2');
require('dotenv').config(); //instancia el archivo .env

var connection = mysql.createConnection({     //crea la conexion con la base de datos con los datos del archivo .env
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database : process.env.DB_NAME

});

connection.connect(function(err) {         //conecta con la base de datos y enviara un mensaje si hay un error
    if (!err) {
        console.log("Conexión exitosa con la base de datos");    
    } else {
        console.log("Error en la conexión con la base de datos");
    }
    
  });

  module.exports = connection;   //modulo que exporta la conexion con la base de datos