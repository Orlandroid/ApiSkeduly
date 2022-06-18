const Appointmen = require('../models/Appointmen')
const appointmen = require('../models/Appointmen')

module.exports.mostrar = (req,res)=>{
    Appointmen.find({},(error,servicios)=>{
        if(error){
            console.log("Eroor al mostrar las citas")
        }
        res.send(servicios)
    })
}


module.exports.create = (req,res)=>{
    const appointmen = new Appointmen({
        establecimiento:req.body.establecimiento,
        empleado:req.body.empleado,
        servicio:req.body.servicio,
        time:req.body.time,
        fecha:req.body.fecha,
        idUser:req.body.idUser,
    })
    appointmen.save(function(error,appointmen){
        if(error){
            console.log(error)
        }
        console.log(appointmen)
    })

}