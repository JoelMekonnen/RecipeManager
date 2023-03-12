const express = require('express')
const ingredients = require('../models/ingredientsModel')
const company = require('../models/companyModel')


// lets first create a new ingredient
const getCompanyid = async (userID) => {
        try {
            const compID = await company.find({companyOwner:userID})
            return compID[0]
        } catch(e){
             console.log(e)
        }
}
// create Ingredients
const createIngredient = async (req, res) => {
      await ingredients.findOne({name: req.body.ingName}).then( async (ing) => {
             if(ing) {
                  return res.status(202).json({msg:"ingriedient already exist"})
             } else {
                var companyID = await getCompanyid(req.user._id)
                // lets get the company id from the user
                // console.log(userCompany)
                var imageLoc = "/ingImage/" + companyID.companyName + "/Ingredients/" + req.file.filename
                const newIngredients = ingredients({
                      name: req.body.ingName,   
                      unitPrice: req.body.price,
                      image: req.file.filename,
                      imageLocation: imageLoc,
                      companyId: companyID,
                      
                })
                await newIngredients.save()
                return res.status(200).json({msg:newIngredients})
             }
           
      }).catch((err) => {
            console.log(err)
            return res.status(500).json({msg:"something went wrong"})
      })
}
// list all the Ingredients
const listAllIngredients = async (req, res) => {
      try {
            const companyId = await getCompanyid(req.user._id)
            var ingredientList = await ingredients.find({companyId: companyId._id})
            return res.status(200).json({"ing":ingredientList})
      } catch(e) {
            console.log(e)
      } 
}
// get ingredient by ID
const getIngredientById = async (req, res) => {
      try {
            const ingredientId = req.params.id
            const companyID = await getCompanyid(req.user._id)
            const ingInfo = await ingredients.find({_id:ingredientId, companyId:companyID._id})
            if(ingInfo.length == 0) {
                   return res.status(202).json({"msg":"no ingredients"})
            } else {
                   return res.status(200).json({"ing":ingInfo})
            }
      } catch(e) {
             console.log(e)
      }
}
// update the Ingredient
const updateIngredient = async (req, res) => {
        try {
              const ingredientId = req.params.id
              const companyID = await getCompanyid(req.user._id)
              ingredients.findOneAndUpdate({_id:ingredientId, companyId:companyID._id}, { name:req.body.ingName, unitPrice:req.body.price}, {new:true}).exec().then((result) => {
                      return res.status(200).json({"newIng":result})
              }).catch((e)=>{
                    console.log(e)
                    return res.status(500).json({"err":e})
              })
        } catch(e) {
               console.log(e)
        }
}
// delete the ingredient

module.exports = { createIngredient, listAllIngredients, getIngredientById, updateIngredient}