const express = require('express')
const router = express.Router()
const passport = require('passport')
const bp = require('body-parser')
const fs = require('fs')
const multer = require('multer')
const path = require('path')
const company = require('../models/companyModel')
const { checkIfUserHasCompany } = require('../middleware/company')

const json = bp.json()

var ingredientStorage = multer.diskStorage({
      destination: async (req, file, callback) => {
          // lets get the company name and put it there
          var userCompany = await company.find({companyOwner:req.user._id})
          var name = userCompany[0].companyName
          if(!fs.existsSync("Companies\\" + name)) {
               fs.mkdirSync("Companies\\" + name + "\\Ingredients", {recursive:true})
          }
          callback(null, "Companies\\" + name + "\\Ingredients")
      },
      filename: function(req, file, callback) {
           callback(null, file.originalname)
      }
})

var ingredientUpload = multer({storage:ingredientStorage})
const { createIngredient, listAllIngredients, getIngredientById, updateIngredient } = require('../controllers/ingredient_controler')


router.post('/create', passport.authenticate('jwt', {session:false}), checkIfUserHasCompany, ingredientUpload.single('ingredientFile'), json, createIngredient)
router.get('/list', passport.authenticate('jwt', {session:false}), checkIfUserHasCompany, listAllIngredients)
router.get('/get/:id', passport.authenticate('jwt', {session:false}), checkIfUserHasCompany, getIngredientById)
router.post('/update/:id', passport.authenticate('jwt', {session:false}), checkIfUserHasCompany, json, updateIngredient)


module.exports = router