const Staff = require('../models/Staff')
const staff = require('../models/Staff')

module.exports.mostrar = (req,res)=>{
    staff.find({},(error,servicios)=>{
        if(error){
            console.log("Eroor al mostrar los servicios")
        }
        res.send(servicios)
    })
}

module.exports.create = (req,res)=>{
    const staff = new Staff({
        nombre:req.body.nombre,
        sexo:req.body.sexo,
        valoracion:req.body.valoracion
    })
    staff.save(function(error,staff){
        if(error){
            console.log(error)
        }
        console.log(staff)
        res.redirect('/navStaff')
    })

}