const express = require('express')
const mongoose = require('mongoose')
const userModel = require('../models/userModels.js')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const validateRegisterInput = require("../validation/register.js")
const validateLoginInput = require("../validation/login.js")



const userRegister = async (req, res) => {
     const { error, isValid } = validateRegisterInput(req.body)
    
     if (!isValid) {
          console.log(isValid)
           return res.status(502).json(error)
     }   
    await userModel.findOne({email:req.body.email}).then(user => {
         if(user) {
              return res.status(400).json({email:"Email alread exists"})
         } else {
              const newUser = new userModel({
                   name: req.body.name,
                   email:req.body.email,
                   password: req.body.password,
                   accountType: req.body.accountType,
              })
              bcrypt.genSalt(10, (err, salt) => {
                  bcrypt.hash(newUser.password, salt, (err, hash) => {
                     if (err) console.log(err)
                     newUser.password = hash
                     newUser.save()
                     .then(user => res.json(user))
                     .catch(err => console.log(err))
                  })
              })
         }
     })
}

const userLogin = async (req, res) => {
     console.log(req.body)
     const { errors, isValid } = validateLoginInput(req.body)
     if(!isValid) {
          res.status(400).json({err: errors})
     }
     const email = req.body.email
     const password = req.body.password
     await userModel.findOne({email: email}).then(user => {
         if(!user) {
             return res.status(404).json({emailnotfound:"Email is not found"})
         }

         bcrypt.compare(password, user.password).then(isMatch => {
               if(isMatch) {
                    // if the user is matched create the jwt payload
                    const payload = {
                          id: user.id,
                          name: user.name
                    }
                    // then sign the toen
                    jwt.sign(
                         payload,
                         process.env.SECRET_OR_KEY,
                         {
                             expiresIn:31556926
                         },
                         (err, token) => {
                              res.json({
                                  success: true,
                                  token:token,
                                  user:user,
                              })
                         }
                    )
               } else {
                  res.status(400).json({passwordIncorrect:"The password provided is Incorrect"})
               }
         })
     })
}
const sayHello = async (req, res) => {
       res.status(200).json({welcome:"Hello User, welcome"})
}
module.exports = { userRegister, userLogin, sayHello }