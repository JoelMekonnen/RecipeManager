const Validator = require('validator')
const isEmpty = require('is-empty')

module.exports = function validationRegisterInput(data) {
       
       let errors = { }
       data.firstname = !isEmpty(data.firstname) ? data.firstname : "",
       data.lastname = !isEmpty(data.lastname) ? data.lastname : "",
       data.email = !isEmpty(data.email) ? data.email : ""
       data.password = !isEmpty(data.password) ? data.password : ""
       data.password2 = !isEmpty(data.password2) ? data.password2: ""

       if (Validator.isEmpty(data.firstname)) {
           errors.firstname = "First Name field is required"
       } 

       if (Validator.isEmpty(data.lastname)) {
         errors.lastname = "First Name field is required"
       } 

       if (Validator.isEmpty(data.email)) {
           errors.email = "Email field is required"
       } else if(!Validator.isEmail(data.email)) {
          errors.email = "Email is invlaid"
       }

       if(Validator.isEmpty(data.password)) {
          errors.password = "password field is required"
       } 
       if (Validator.isEmpty(data.password2)) {
         errors.password2 = "confirm password field is required"
       } 

       if(!Validator.isLength(data.password, { min:6, max:30 })) {
        errors.password = "password must be at least 6 characters"
       }

       if(!Validator.equals(data.password, data.password2)) {
        errors.password = "passwords must match"
      }
      // console.log(errors)
      return {
         errors, isValid: isEmpty(errors)
      }


}