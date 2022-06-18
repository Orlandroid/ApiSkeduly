const expres = require('express')
const router = require('express').Router()

const appointMentController = require('../controllers/appointMentController')

router.get('/api/appointments' , appointMentController.mostrar)


router.post('/createAppointment' ,appointMentController.create)


module.exports  = router