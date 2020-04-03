const express = require('express')
const router = express.Router();

//importar el controlador
const proyectosController = require ('../controllers/proyectosController');

module.exports = function() {

    //Ruta para el home
//.use:Cualquier request corre este codigo
//.send: Imprime lo que tenemos entreparentesis
router.get('/', proyectosController.proyectosHome);
router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
router.post('/nuevo-proyecto', proyectosController.nuevoProyecto);
return router;


}