const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CompanySchema = new Schema({
       companyName: {
           type: String,
           required: true
       },
       companyLogo: {
           type: String,
       },
       companyOwner: {
           type: mongoose.ObjectId,
           ref: 'userModel'
       },
       companyLocation: {
           type: String
       },
       companyDescription: {
          type: String
       }

})
module.exports = mongoose.model("companyModel", CompanySchema)