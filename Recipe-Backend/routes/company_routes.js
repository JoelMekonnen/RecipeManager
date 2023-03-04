const express = require('express')
const router = express.Router()
const passport = require('passport')
const bp = require('body-parser')

const json = bp.json()

const { registerCompany, listCompany } = require('../controllers/company_controller')

router.post('/register', passport.authenticate('jwt', {session:false}), json, registerCompany)
router.get('/list', passport.authenticate('jwt', {session:false}), json, listCompany)

module.exports = router