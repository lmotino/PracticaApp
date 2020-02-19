var express = require('express');
var router = express.Router();
var userModel = require('./seguridad.model');

// HTTP GET POST PUT DELETE
/*
    GET OBTENER -> SELECT -> CONSULTA
        filtros - parametros // dentro de la uri
    POST CREAR -> INSERT -> AGREGAR
        datos // dentro del body del request
    PUT ACTUALIZAR -> UPDATE -> MODIFICAR O ACTUALIZAR RECURSO
        datos // dentro del body del request
    DELETE ELIMINAR -> DELETE -> ELIMINAR RECURSO
        filtros - parametros // dentro de la uri
*/

// Crear un modelo de datos para la entidad

// CRUD
// http://localhost:3000/api/seguridad/user/all
// Obtener todos los registros de usuarios
router.get('/user/all', (req, res)=>{
    return res.status(200).json(userModel.getAll());
}); //get user/all

// http://localhost:3000/api/seguridad/user/1
router.get('/user/:id',(req, res)=>{
    var id = parseInt( req.params.id );
    var user = userModel.getById(id);
    return res.status(200).json(user);
});

//http://localhots:3000/api/seguridad/user/new
router.post('/user/new', (req, res)=>{
    var datosEnviados = req.body;
    var newUser = userModel.addNew(datosEnviados);
    return res.status(200).json(newUser);
}); // post user/new

router.put('/user/upd/:id',(req, res)=>{
    var id = parseInt(req.params.id);
    var updUser = userModel.update(id, req.body);
    res.status(200).json(updUser);
});


module.exports = router;