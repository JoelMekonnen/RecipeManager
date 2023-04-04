const express = require('express')
const router = express.Router()
const passport = require('passport')
const bp = require('body-parser')

const json = bp.json()

router.use(passport.authenticate('jwt', {session:false}))
router.use(json)

const { createRecipe, getRecipes, getRecipesById, updateRecipe } = require('../controllers/recipe_controller')
const { createCategory, getAllCategories } = require('../controllers/category_controller')
router.post('/create', createRecipe)
router.get('/list', getRecipes)
router.get('/getById/:id', getRecipesById)
router.post('/update', updateRecipe)
router.post('/category/create', createCategory)
router.get('/category/get', getAllCategories)

module.exports = router