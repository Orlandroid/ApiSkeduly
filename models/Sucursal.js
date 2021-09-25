const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sucursalesSchem = Schema({
    name: String,
    lat: String,
    long: String
})

module.exports = mongoose.model('sucursales', sucursalesSchem)
