const express = require('express')
const router = express.Router()
const passport = require('passport')
const bodyParser = require('body-parser')

const json = bodyParser.json()

router.use(json)
router.use(passport.authenticate('jwt', {session:false}))


 const { createStoreTypes, getStoreTypes, updateStoreTypes } = require('../controllers/store_controller')

 router.post('/create', createStoreTypes)
 router.get('/get', getStoreTypes)
 router.post('/:id/update', updateStoreTypes)
 

 module.exports = router