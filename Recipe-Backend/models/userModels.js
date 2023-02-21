const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
     name: {
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
        }

     }
})

module.exports = mongoose.model('userModel', userSchema)