const express = require('express');
const router = express.Router();
const { admitPatient, patientGets } = require('./admitController');
const admitPatientValidationRules = require('./admitValidator'); // Import default export

// POST endpoint to admit patients with validation
router.post('/admitpt', admitPatientValidationRules(), admitPatient);

// GET endpoint to get all admitted patients
router.get('/patientGet', patientGets);

module.exports = router;
