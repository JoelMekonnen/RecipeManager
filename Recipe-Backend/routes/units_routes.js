const express = require('express')
const router = express.Router()
const bp = require('body-parser')
const json = bp.json()
const { createBaseUnit, createUnits, getBaseUnits, getUnits, getSubUnits } = require('../controllers/unitController')

router.use(json)
router.post('/baseUnit/create', createBaseUnit)
router.post('/create', createUnits)
router.get("/baseUnit/get", getBaseUnits)
router.get("/get", getUnits)
router.get("/:baseId/get", getSubUnits)
module.exports = router