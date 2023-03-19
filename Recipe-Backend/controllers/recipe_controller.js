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
    await recipes.find({}).populate('ingredientList.ingredientID').then((result) => {
          return res.status(200).json({'msg':result})
    }).catch((e) => {
          console.log(e)
    })

}

module.exports = { createRecipe, getRecipes }