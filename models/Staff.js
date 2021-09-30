const mongoose = require('mongoose')
const Schema = mongoose.Schema

const staffSchema = Schema({
    nombre: String,
    sexo: String,
    valoracion: Number
})

module.exports = mongoose.model('staff', staffSchema)
