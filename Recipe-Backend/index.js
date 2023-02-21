const express = require('express')
const connectDB = require('./config/dbconn')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const router = express.Router()
const port = 6000

// starting the email
app.listen(port, () => {
     console.log(`app is listening on port ${port}`)
})
connectDB()