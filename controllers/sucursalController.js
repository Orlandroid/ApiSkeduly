



const Sucursal = require('../models/Sucursal')
const sucursal = require('../models/Sucursal')


module.exports.mostrar = (req,res)=>{
    sucursal.find({},(error,sucursales)=>{
        if(error){
            console.log("Eroor al mostrar las sucursales")
        }
        res.send(sucursales)
    })
}

module.exports.create = (req,res)=>{
    console.log(req.body)
    const sucursal = new Sucursal({
        name:req.body.name,
        lat:req.body.lat,
        long:req.body.long
    })
    sucursal.save(function(error,sucursal){
        if(error){
            console.log(error)
        }
        console.log(sucursal)
        res.redirect('/navSucursal')
    })

}