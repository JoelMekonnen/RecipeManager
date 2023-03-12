const express = require('express')
const companyModel = require('../models/companyModel')

const checkIfUserHasCompany = async (req, res, next) => {
        const comp = companyModel.findOne({companyOwner:req.user._id})
        if(comp.length == 0) {
              res.status(401).json({msg:"please register your company"})
        } else {
             next()
        }
}

module.exports = { checkIfUserHasCompany }