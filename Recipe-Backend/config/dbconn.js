const mongoose = require('mongoose')

// lets connect to our mongo database
const connectDB = async() => {
      try {
          const connection = await mongoose.connect("mongodb://root:joel1234@localhost:27017/Recipe-Manager?authMechanism=DEFAULT&directConnection=true")
          console.log(`successfully connected: ${connection.connection.host}`)
      } catch ( error ) {
          console.error(`Error: ${error.message}`)
      }
}

module.exports = connectDB