const {request, response} = require('express');

const usuariosGet = (req = request, res = response) => {
    // Cuerpo HTML - Texto Plano
    // res.send('Hello World');

    // Tomar los parámetros de la query por url
    // Puedo pedir la query completa
    // const query = req.query; 

    // O destructurar, pedir los params que necesite y pasar un parm por defecto si viene indefinido
    const {q, nombre = 'No nombre', apikey, page = 1, limit} = req.query; 

    // JSON
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
};

const usuariosPut = (req, res) => {
    // const id = req.params.id;
    const {id} = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
};

const usuariosPost = (req, res) => {
    // const body = req.body; Pide el body entero
    const {nombre, edad} = req.body; // Destrucutra y pide algunos atributos del body

    res.status(201).json({
        msg: 'post API - controlador',
        //body
        nombre,
        edad
    });
};

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - controlador'
    });
};

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    });
};

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete

}