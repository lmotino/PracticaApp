//RUTAS -> router -> app : express

// rutas -> router:entidad -> router:api -> app:express

var express = require('express');
var router = express.Router();
// Roters de Entidades
var seguridadRouter = require('./seguridad/seguridad');

router.use('/seguridad', seguridadRouter);

//http://localhost:3000/api/verison
router.get('/version', function(req, res){
    res.status(200).json({"Version":"API v1.0"});
});

module.exports = router;

/*
// ESTRUCTURA DE UN MODULO Y USO DE MODULE.EXPORTS PARA
// EXPONER LA FUNCIONALIDAD DEL MODULO.

var libLencaFunctions = {}; //JSON 

libLencaFunctions.mensaje = "Hola Mundo";
libLencaFunctions.version = "v1.0";
libLencaFunctions.sayHello = ()=>{
    console.log("Hello!");
} //ES6 funciones de flecha gorda

module.exports = libLencaFunctions;
*/