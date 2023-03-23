const express = require('express')
const recipes = require('../models/recipeModels')
const ingredient = require('../models/ingredientsModel')
const company = require('../models/companyModel')

const getCompanyid = async (userID) => {
     try {
          const compID = await company.find({companyOwner:userID})
          return compID[0]
     } catch(e) {
          console.log(e)
     }
}

const createRecipe = async (req, res) => {
    
     // we are going to create the recipe
     // first get all the required field
     let { name, ingList, procedure, price,  } = req.body

    // fetch the user id
    let user_id = req.user._id

    // fetch the company
    const fetchCompany = await getCompanyid(user_id)

    await recipes.create({
         recipeName:name,
         ingredientList:ingList,
         companyID:fetchCompany._id,
         totalPrice:price,
         procedure:procedure
    }).then((result) => {
          return res.status(200).json({msg:result})
    }).catch((e) => {
          console.log(e)
    })
     // after destructuring we try to create the model 

}

const getRecipes = async (req, res) => {
     const user_id = req.user._id
     // fetch the user
     const fetchCompany = await getCompanyid(user_id)
     // console.log(fetchCompany)
    await recipes.find({companyID:fetchCompany._id}).populate('ingredientList.ingredientID').then((result) => {
          return res.status(200).json({'msg':result})
    }).catch((e) => {
          console.log(e)
    })
}

const getRecipesById = async (req, res) => {
       const recipe_id = req.params.id
       const company = await getCompanyid(req.user._id)
       await recipes.find({companyID:company.id, _id:recipe_id}).populate('ingredientList.ingredientID').then((result) => {
            return res.status(200).json({'msg':result})
       }).catch((e) => {
            console.log(e)
            return res.status(500).json({'err':'something went wrong'})
       })
}
const updateRecipe = async (req, res) => {
      const { name, ingredientList, procedure, totalPrice, recipe_id } = req.body
      const company = await getCompanyid(req.user._id)
      await recipes.findOneAndUpdate({companyID:company.id, _id:recipe_id}, { recipeName:name, ingredientList:ingredientList, procedure:procedure, totalPrice:totalPrice }, {new:true}).exec().then((result) => {
             return res.status(200).json({msg:result})
      }).catch((error) => {
            console.log(error)
      })
}
module.exports = { createRecipe, getRecipes, getRecipesById, updateRecipe }