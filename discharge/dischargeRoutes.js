const express = require('express');
const router = express.Router();
const { dischargePatient  } = require('./dischargeController');
//discharge:
router.post('/distaa',dischargePatient);
module.exports=router;