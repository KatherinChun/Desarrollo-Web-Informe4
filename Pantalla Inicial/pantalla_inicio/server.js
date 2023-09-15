require('dotenv').config(); //instancia el archivo .env
const http = require('http');
const app = require('./index');
const server = http.createServer(app);

server.listen(process.env.PORT, () => {
    console.log("Servidor escuchando en el puerto " + process.env.PORT);
});


