const express = require('express')
const companyModel = require('../models/companyModel');
const userModel = require('../models/userModels')


const registerCompany  = async (req, res) => {
      await companyModel.findOne({companyName:req.body.compName}).then( async comp => {
               if(comp) {
                    return res.status(402).json({err: "Company Name already Exists"})
               } else {
                   const newCompany = companyModel({
                         companyName: req.body.compName,
                         companyOwner: req.user._id,
                         companyLocation: req.body.compLocation,
                         companyDescription: req.body.compDescription,
                   })
                   await newCompany.save()
                   await userModel.findByIdAndUpdate(req.user._id, {accountStatus:"COMPLETED"}, {new:true}).exec().then((user) => {
                          return res.status(200).json({company:newCompany, user:user})
                   }).catch(err => {
                       console.log(err)
                   })

               }
      }).catch((err)=>{
           console.log(err)
      });
}

const listCompany = async (req, res) => {
       await companyModel.find({companyOwner:req.user._id}).populate('companyOwner').exec().then((comp) => {
              return res.status(200).json({company:comp})
       }).catch((err) => {
           console.log(err)
       })
}
module.exports = { registerCompany, listCompany }