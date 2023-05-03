const express = require('express')
const { storeTypeModel, storeModel } = require('../models/storeModel')
const company = require('../models/companyModel')

const getCompanyid = async (userID) => {
    try {
         const compID = await company.find({companyOwner:userID})
         return compID[0]
    } catch(e) {
         console.log(e)
    }
}

// lets create the storeTypes
const createStoreTypes = async (req, res) => {

     let  { storeType, storeDescription } = req.body

     // let us fetch the user id
     let user_id = req.user._id

     // fetch the company
     const companyInfo = await getCompanyid(user_id)

     await storeTypeModel.find({storeType:storeType, companyID:companyInfo._id}).then((result) => {
           if(result.length != 0) {

              return res.status(301).json({'msg':'store type exists already'})
           } else {
            
             storeTypeModel.create({
                   storeType: storeType,
                   description: storeDescription,
                   companyID: companyInfo._id
             }).then((result) => {
                  return res.status(200).json({'store': result})
             }).catch((err) => {
                   console.log(err)
             })
           }
     }).catch((err) => {
          console.log(err)
     })
}


// get the store types

module.exports = { createStoreTypes }