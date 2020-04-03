const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-Parser');

//crear conexion a db
const db = require('./config/db');

//Importar el modelo
require('./models/Proyectos');

db.sync()
    .then(() => console.log('Conectado al Servidor'))
    .catch(error => console.log(error));

//crear una appa de express
const app = express();

//Carga archivos estaticos
app.use(express.static('public'));


//habilitar pug
app.set('view engine', 'pug');


//Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views') );

//Habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes() );


app.listen(3000);


  