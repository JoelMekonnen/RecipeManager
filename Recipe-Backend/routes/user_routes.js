const express = require('express')
const router = express.Router()
const passport = require('passport')
const bodyParser = require('body-parser')

const json = bodyParser.json()

const { userRegister, userLogin, sayHello } = require('../controllers/user_controller')
router.post('/register', json, userRegister)
router.post('/login', json, userLogin)
router.get("/hello",  sayHello)

module.exports = router

