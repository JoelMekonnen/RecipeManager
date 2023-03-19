const express = require('express')
const connectDB = require('./config/dbconn')
const { createServer } = require("http")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const router = express.Router()
const port = 4000
const userRoutes = require('./routes/user_routes')
const companyRoutes = require('./routes/company_routes.js')
const ingredientRoutes = require('./routes/ingredient_route')
const recipeRoutes = require('./routes/recipe_routes')
const path = require('path')
// starting the email


const httpServer = createServer(app)
connectDB()
// lets define the routes 
app.use(cors({
      origin: '*'
}))
app.use((req, res, next) => {
      res.header( {"Access-Control-Allow-Origin":"*"} )
      next()
})
app.use(passport.initialize())
require('./middleware/auth')(passport)

app.use('/user', userRoutes)
app.use('/company', companyRoutes)
app.use('/ingredient', ingredientRoutes)
app.use('/ingImage', express.static(path.join(__dirname, 'Companies')))
app.use('/recipe', recipeRoutes)
httpServer.listen(port, '0.0.0.0')