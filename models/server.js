// Inicialización RESTserver
const express = require('express');
var cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'));

        // Lectura y parseo del body - vía JSON
        // Ese método de express va a serializar el contenido
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor escuchando puerto', this.port);
        });
    }
}

module.exports = Server;