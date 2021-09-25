const mongoose = require('mongoose')
const Schema = mongoose.Schema

const servicioSchem = Schema({
    name:String,
    precio:Number
})

module.exports = mongoose.model('servicios', servicioSchem)
