const express = require('express')
const department = require('../models/departmentModel')
const company = require('../models/companyModel')

// lets first create a new ingredient
const getCompanyid = async (userID) => {
    try {
        const compID = await company.find({companyOwner:userID})
        return compID[0]
    } catch(e){
         console.log(e)
    }
}
// creat the department
const createDepartment = async (req, res) => {
    var companyID = await getCompanyid(req.user._id)
    var { dept, description } = req.body

    await department.findOne({department:dept}).then( async (result) => {
            if(result) {
                 return res.status(202).json({msg:"department already exists"})
            }
            else {
                department.create({
                      department:dept,
                      description: description,
                      companyID: companyID._id
                }).then((result) => {
                     return res.status(200).json({msg:result})
                }).catch((err) => {
                      console.log(e)
                })
            }
    })
}
// update the department
const updateDepartment = async (req, res) => {
    try {
        var companyID = await getCompanyid(req.user._id)
        var dept_id = req.params.id
        var { dept, description } = req.body
        department.findOneAndUpdate({_id:dept_id, companyID:companyID._id}, {department:dept, description:description}, {new:true}).then((result) => {
             return res.status(200).json({"newDept":result})
        }).catch((err) => {
              console.log(err)
        })
    } catch (err) {
           console.log(e)
    }
}
// get the department by ID
const getDepartmentById = async (req, res) => {
     try {
          const deptID = req.params.id
          var companyID = await getCompanyid(req.user._id)
          const dept = await department.find({_id:deptID, companyID:companyID})
          if (dept.length == 0) {
              return res.status(200).json({"msg":"department not found"})
          } else {
            return res.status(200).json({dept: dept})
          }

     } catch(err) {
         console.log(err)
     }
}
// get all the departments 
const listAllDepartment = async (req, res) => {
     try {
        const companyId = await getCompanyid(req.user._id)
        var dept = await department.find({companyID:companyId})
        return res.status(200).json({"dept":dept})
     } catch(err) {
         console.log(err)
     }
}

module.exports = { listAllDepartment, getDepartmentById, updateDepartment, createDepartment }