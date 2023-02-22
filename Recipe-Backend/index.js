const express = require('express')
const connectDB = require('./config/dbconn')
const { createServer } = require("http")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const router = express.Router()
const port = 6000
const userRoutes = require('./routes/user_routes')
// starting the email


const httpServer = createServer(app)
connectDB()
// lets define the routes 
app.use(cors())
app.use(passport.initialize())
require('./middleware/auth')(passport)

app.use('/user', userRoutes)
httpServer.listen(port, '0.0.0.0')