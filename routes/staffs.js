const expres = require('express')
const router = require('express').Router()

const staffController = require('../controllers/staffController')

router.get('/api/staffs' , staffController.mostrar)


router.post('/createStaff' ,staffController.create)

router.get('/navStaff',(req,res) =>{
    res.render('staff.ejs')
})

module.exports  = router