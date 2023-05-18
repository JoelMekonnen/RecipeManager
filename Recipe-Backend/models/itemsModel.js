const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ingredientSchema = new Schema({
        name: {
             type:String,
             required: true
        },
        storeType: {
            type:mongoose.ObjectId,
            ref: 'storeType'
        },
        fullWeight: {
          type: Number,
          default: 0,
        },
        emptyWeight: {
           type: Number,
           default: 0
        },
        fullLiquidWeight: {
          type: Number,
          default: 0
        },
        volume: {
          type: Number,
          default: 0
        },
        ingredient: {
            type: Boolean,
            default: true
        },
        unitPrice: {
             type: Number,
             required: true
        },
        unit: {
            type: mongoose.ObjectId,
            ref:'baseUnitsModel'  
        },
        companyId: {
            type: mongoose.ObjectId,
            ref: 'companyModel',
        },
        createdAt: {
             type: Date,
             default: Date.now
        }
})

module.exports = mongoose.model('ingredients', ingredientSchema)