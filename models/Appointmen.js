const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Appointment = Schema({
    establecimiento:String,
    empleado:String,
    servicio:String,
    time:String,
    fecha:String,
    idUser:String
})

module.exports = mongoose.model('appointment', Appointment)
