const express = require('express')
const { unitModel, baseUnitsModel } = require('../models/unitModel')

const createBaseUnit = async (req, res) => {
      let { baseUnit } = req.body
      baseUnitsModel.create({
           baseUnit:baseUnit
      }).then((result)=> {
           return res.status(200).json({result:result})
      }).catch((err) => {
           return res.status(500).json({err:err})
      }) 
}

// lets create the sub units (for example if the weight is KG)
const createUnits = async (req, res) => {
      let { baseUnit, unit, multiplier } = req.body
      unitModel.find({unit:unit}).exec().then((result) => {
           if(result.length === 0) {
                unitModel.create({
                    baseUnit:baseUnit,
                    unit:unit,
                    multiplier:multiplier
          
                }).then((result)=> {
                     return res.status(200).json({"result":result})
                }).catch((err) => {
                     console.log(err)
                     return res.status(500).json({"err":"something went wrong please try again"})
                })
           }
           else {
               console.log(result.length)
               return res.status(203).json({"result":"unit already exists"})
           }
      }).catch((err) => {
             console.log(err)
             return res.status(500).json({"error":"something went wrong"})
      })
     
}
// lets return all the base units 
const getBaseUnits = async (req, res) => {
       baseUnitsModel.find({}).exec().then((result) => {
             return res.status(200).json({"baseUnits":result})
       }).catch((err) => {
            console.log(err)
            return res.status(500).json({"err":err})
       })
}
// lets return all the units
const getUnits = async (req, res) => {
    unitModel.find({}).exec().then((result) => {
           return res.status(200).json({"units":result})
     }).catch((err) => {
          console.log(err)
          return res.status(500).json({"err":err})
     })
}
// lets return all the subunits of a baseUnits
const getSubUnits = async (req, res) => {
     let baseUnitId = req.params.baseId
     console.log(baseUnitId)
     unitModel.find({baseUnit:baseUnitId}).then((result) => {
            return res.status(200).json({units:result})
     })
}
module.exports = { createBaseUnit, createUnits, getBaseUnits, getUnits, getSubUnits }