const Servicio = require('../models/Servicio')
const servicio = require('../models/Servicio')


//this view is for the api
module.exports.mostrar = (req,res)=>{
    servicio.find({},(error,servicios)=>{
        if(error){
            console.log("Eroor al mostrar los servicios")
        }
        res.send(servicios)
    })
}

module.exports.mostrarView = (req,res)=>{
    servicio.find({},(error,servicios)=>{
        if(error){
            console.log("Eroor al mostrar los servicios")
        }
        console.log(servicios)
        res.render('viewServicios',{servicios:servicios})
    })
}

module.exports.eliminar = (req,res)=>{
    const id = req.params.id
       servicio.findByIdAndRemove(id,(error,servicio)=>{
        if(error){
            console.log("Error al eliminar el alumnos")
            return res.status(500).json({
                message:'Error al eliminar al alumno'
            })
        }
    })
    res.redirect('/navListaServicios')
}


module.exports.create = (req,res)=>{
    console.log(req.body)
    const servicio = new Servicio({
        name:req.body.name,
        precio:req.body.precio,
    })
    servicio.save(function(error,sucursal){
        if(error){
            console.log(error)
        }
        console.log(sucursal)
        res.redirect('/navServicios')
    })

}