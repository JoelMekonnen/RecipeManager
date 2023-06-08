const express = require('express')
const router = express.Router()
const bp = require('body-parser')
const json = bp.json()
const { listAllDepartment, getDepartmentById, updateDepartment, createDepartment } = require('../controllers/department_controller')
const passport = require('passport')

router.use(json)
router.use(passport.authenticate('jwt', {session:false}))
router.post('/create', createDepartment)
router.get('/list', listAllDepartment)
router.get('/details/:id', getDepartmentById)
router.post('/update/:id', updateDepartment)

module.exports = router