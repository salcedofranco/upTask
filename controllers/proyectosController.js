exports.proyectosHome = (req, res) => {
    res.render('index',{
        nombrePagina : 'Proyectos'
    });
}
//.send imprimia lo que estaba dentro de parentesis
//.render nos va a imprimir lo que vayamos cargando en el template engine. pug(VISTAS)
exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto',{
        nombrePagina : 'Nuevo Proyecto'
    });
}

exports.nuevoProyecto = (req, res) => {
    //res.send('Enviaste el formulario');
    //Enviar a consola lo que el usuario escriba
    //console.log(req.body);

    //Validar que tengamos algo en el input. Destrucctoring. Sin express validator
    const { nombre } = req.body;

    let errores = [];
    
    if(!nombre) {
        errores.push({'texto': 'Agrega Nombre al Proyecto!'})
    }

    //si hay errores
    if(errores.length > 0 ){
        res.render('nuevoProyecto', {
            nombrePagina : 'Nuevo Proyecto',
            errores
        })
    } else {
        //no hay errores
        //insertamos en bd
    }

}


