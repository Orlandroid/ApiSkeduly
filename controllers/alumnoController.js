const Alumno = require('../models/Alumno')
const alumno = require('../models/Alumno')


module.exports.mostrar = (req,res)=>{
    alumno.find({},(error,alumnos)=>{
        if(error){
            console.log("Error al mostrar los alumnos")
        }
        res.send(alumnos)
    })
}

module.exports.create = (req,res)=>{
    const alumno = new Alumno({
        nombre:req.body.name,
        edad:req.body.edad
    })
    alumno.save(function(error,alumno){
        if(error){
            console.log(error)
        }
        res.redirect('/')
    })
}