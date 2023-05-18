const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
      recipeName: {
          type: String,
          required: true,
      },
      ingredientList: [{
          ingredientID: {
              type: mongoose.ObjectId,
              ref: 'ingredients'
          },
          ammount: {
              type:Number,
          },
          unit: {
              type: mongoose.ObjectId,
              ref: 'unitsModel'
          }
      }],
      procedure: [String],
      totalPrice: Number,
      created_at: {
          type:Date,
          default: Date.now()  
      },
      categoryID: {
          type: mongoose.ObjectId,
          ref: 'categoryModel'
      },
      departmentID: {
         type: mongoose.ObjectId,
         ref: 'department'
      },
      companyID: {
           type:mongoose.ObjectId,
           ref: 'companyModel'
      }
})

module.exports = mongoose.model('recipeModel', RecipeSchema)
