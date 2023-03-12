const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ingredientSchema = new Schema({
        name: {
             type:String,
             required: true
        },
        unitPrice: {
             type: Number,
             required: true
        },
        image: {
             type:String,
             required:false
        },
        imageLocation: {
             type:String,
             required:false
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