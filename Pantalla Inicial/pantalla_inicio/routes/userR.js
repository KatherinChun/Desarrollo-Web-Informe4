const express = require('express');         //importa express
const connection = require('../connection');    //trae la conexion con la base de datos
const router = express.Router();                       //crea el router para las rutas

router.post('/registrarse', (req, res) => {                 //ruta para registrar un usuario
    let user = req.body;
    query = "select carnet, name, lastname, email, password, role, status from usuario where carnet = ?";
    connection.query(query, [user.carnet], (err, resultado) => {
        if(!err){
            if(resultado.length <= 0){
                
                //los datos que entraran a la base de dato status y role estan por defecto


                query = "INSERT INTO usuario (carnet, name, lastname, email, password, status, role) VALUES (?, ?, ?, ?, ?, 'false', 'user')";        
                connection.query(query, [user.carnet, user.name, user.lastname, user.email, user.password], (err, resultado) => {           
                   if(!err){
                       return res.status(200).json({message:"Usuario registrado"}); //responde con un mensaje 200 'OK'
                }else{
                    return res.status(500).json(err); //responde con un error 500 'Internal Server Error'
                }
                }
                );
            }else{
                return res.status(400).json({message:"Carnet existente"}); //responde con un error 400 'Bad Request'
            }
        }else{
            return res.status(500).json(err);   //responde con un error 500 'Internal Server Error'
        }

    });

});





module.exports = router;       //exporta las rutas