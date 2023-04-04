const express = require('express')
const category = require('../models/categoryModel')
const company = require('../models/companyModel')

const getCompanyid = async (userID) => {
    try {
         const compID = await company.find({companyOwner:userID})
         return compID[0]
    } catch(e) {
         console.log(e)
    }
}
// lets create the categories 
const createCategory = async (req, res) => {
      // lets create the category for the recipes
      // each company can create thier own category, therefore we are going to filter the categories with names and company id
      const  { category_name, description,  } = req.body
      const  compID = getCompanyid(req.user._id)._id
      try {
         category.findOne({category:category_name, companyID: compID}).exec().then(async (result) => {
                if(result) {
                     res.status(200).json({"msg":"category already exists"})
                } else {
                     await category.create({
                          category: category_name.trim().toLowerCase(),
                          description:description,
                          companyID:compID,
                     }).then((createResult) => {
                          return res.status(200).json({msg:createResult})
                     }).catch((err) => {
                          console.log(err)
                          return res.status(500).json({err:err})
                     })
                }
         }).catch((error) => {
              return res.status(500).json({err:error})
         })
      } catch(e) {
           console.log(e)
      }
}
// lets get all the categories
const getAllCategories = async (req, res) => {
    const compID = getCompanyid(req.user._id)._id
    try {
        const result = await category.find({companyID:compID})
         return res.status(200).json({msg:result})
    } catch(error) {
         return res.status(500).json({error:error})
    }
}
 

module.exports = { createCategory, getAllCategories}