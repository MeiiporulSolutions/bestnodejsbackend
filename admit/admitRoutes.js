const express = require('express');
const router = express.Router();
const { admitPatient, patientGets  } = require('./admitController');
// POST endpoint to add beds
router.post('/admitpt', admitPatient);

// // GET endpoint to get all beds
 router.get('/patientGet', patientGets );

module.exports = router;
