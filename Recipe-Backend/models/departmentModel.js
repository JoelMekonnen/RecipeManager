const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DepartmentSchema = new Schema({
      department: {
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
}, {
    timestamps: true,
  })

  module.exports = mongoose.model('departments', DepartmentSchema)