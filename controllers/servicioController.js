const Servicio = require('../models/Servicio')
const servicio = require('../models/Servicio')


module.exports.mostrar = (req,res)=>{
    servicio.find({},(error,servicios)=>{
        if(error){
            console.log("Eroor al mostrar los servicios")
        }
        res.send(servicios)
    })
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