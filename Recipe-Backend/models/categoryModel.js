// this model consists of the category defintion of the model 
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = Schema({
      category: {
         type:String,
         required: true
      },
      description: {
             type:String,
      },
      companyID: {
            type: mongoose.ObjectId,
            ref: 'companyModel'
      }
      
}, {
      timestamps: true
})

module.exports = mongoose.model('categoryModel', CategorySchema)