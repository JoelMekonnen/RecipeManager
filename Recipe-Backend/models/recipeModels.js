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
              type: String
          }
      }],
      procedure: [String],
      totalPrice: Number,
      companyID: {
           type:mongoose.ObjectId,
           ref: 'companyModel'
      }
})

module.exports = mongoose.model('recipeModel', RecipeSchema)
