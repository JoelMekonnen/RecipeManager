const JwtStrategy = require('passport-jwt').Strategy
const ExtracatJwt = require('passport-jwt').ExtractJwt
const mongoose = require('mongoose')
const user = mongoose.model('userModel')
const proc = require('dotenv').config()

const opts = { }
opts.jwtFromRequest = ExtracatJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.SECRET_OR_KEY

module.exports = passport => {
      passport.use(
           new JwtStrategy(opts, (jwt_payload, done) => {
                user.findById(jwt_payload.id).then(user => {
                      if(user) {
                          return done(null, user)
                      }
                      return done(null, false)
                }).catch(err => console.log(err))
           })
      )
}

