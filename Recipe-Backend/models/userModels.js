const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
     firstname: {
         type: String,
         required: true,
     },
     lastname: {
         type: String,
         required: true,
       },
     email: {
        type: String,
        required: true,
     },
     password: {
        type: String,
        required: true
     },
     accountType: {
        type: String,
        enum: {
            values: ["OWNER", "ADMINSTRATOR", "BLOGGER", "CHEF"],
            message: '{VALUE} is not supported'
        },
        default:"OWNER",

     }
})

module.exports = mongoose.model('userModel', userSchema)