const { mongoose } = require("mongoose")

const Schema = mongoose.Schema

const stockSchema = new Schema({
        // it is the ammount of the stock of an ingredient at a particular time in a given time 
        ingredientID: {
              type: mongoose.ObjectId,
              ref: 'ingredients'
        },
        ammount: Number, // the quanatity left 
        dateUpdate: {
             type: Date,
             default: Date.now()
        }, // the date the item is updated 
        storeType: {
             type: mongoose.ObjectId,
             ref: 'storeType'
        },
        companyID: {
             type: mongoose.ObjectId,
             ref: 'companyModel'
        },
        
})

module.exports = mongoose.model('stockModel', stockSchema)