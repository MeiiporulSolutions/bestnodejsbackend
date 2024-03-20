const express = require('express');
const router = express.Router();
const { dischargePatient  } = require('./dischargeController');
const { dischargePatientValidationRules } = require('./dischargeValidator')

//discharge:
router.post('/distaa',dischargePatientValidationRules(),dischargePatient);
module.exports=router;