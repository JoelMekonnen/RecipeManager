const mongoose = require('mongoose')
const Schema = mongoose.Schema



const BaseUnits = new Schema({
       baseUnit: {
           type:String,
           required:true,
       },

}, {
     timestamps:true
})


const UnitSchema = new Schema({
        baseUnit: {
             type:mongoose.ObjectId,
             ref:'baseUnitsModel'
        },
        unit: {
            type:String,
            required:true
        },
        multiplier: {
             type:Number,
        }
})

const baseUnitsModel = mongoose.model('baseUnitsModel', BaseUnits)


const unitModel = mongoose.model('unitsModel', UnitSchema)

module.exports = { baseUnitsModel:baseUnitsModel, unitModel:unitModel }