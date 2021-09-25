const express = require('express')
const router = express.Router()

const servicioController = require('../controllers/servicioController')

router.get('/servicios',servicioController.mostrar)

router.post('/createServicio',servicioController.create)

module.exports = router