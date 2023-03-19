const express = require('express')
const router = express.Router()
const passport = require('passport')
const bp = require('body-parser')

const json = bp.json()

router.use(passport.authenticate('jwt', {session:false}))
router.use(json)

const { createRecipe, getRecipes } = require('../controllers/recipe_controller')
router.post('/create', createRecipe)
router.get('/list', getRecipes)

module.exports = router