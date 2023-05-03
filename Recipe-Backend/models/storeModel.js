const mongoose = require('mongoose')
const Schema = mongoose.Schema

// lets add the Store type to identify the where the request is coming from 
const StoreType = new Schema({
       storeType: {
           type: String,
            required: true
       },
       description: {
          type: String,
       },
       companyID: {
          type: mongoose.ObjectId,
          ref: 'companyModel'
       }
})

// the schema to hold all the action such as purchase and withdraw
const StoreSchema = new Schema({
        grnID: {
             type: String,
             required: true
        },
        itemList:[
             {
                 ingredientID: {
                       type: mongoose.ObjectId,
                       ref: 'ingredients'
                 }, 
                 quantity: {
                      type: Number,
                 },
                 unit: {
                     type: mongoose.ObjectId,
                     ref: 'unitsModel'
                 }
             }
        ],
        totalPrice: Number, // the total price of the item that is inserted into the system
        dateAdded: {
            type: Date,
            default: Date.now()
        }, 
        action: {
             type: String,
             enum: ['IN', 'OUT']
        },
        companyID: {
            type: mongoose.ObjectId,
            ref: 'companyModel'
        }
})

const storeTypeModel = mongoose.model('storeType', StoreType)
const storeModel = mongoose.model('storeModel', StoreSchema)
module.exports = { storeTypeModel: storeTypeModel, storeModel: storeModel }
