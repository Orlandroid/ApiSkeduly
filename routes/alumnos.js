const express = require('express')
const router = express.Router()

const alumnoController = require('../controllers/alumnoController')

router.get('/alumnos',alumnoController.mostrar)

router.post('/create',alumnoController.create)

module.exports=router