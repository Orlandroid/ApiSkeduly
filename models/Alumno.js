const mongoose = require('mongoose')
const Schema = mongoose.Schema

const alumnoSchema = new Schema({
    nombre:String,
    edad:Number
})

module.exports = mongoose.model('alumnos',alumnoSchema)