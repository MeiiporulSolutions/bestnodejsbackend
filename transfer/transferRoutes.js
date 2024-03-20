const express = require('express');
const router = express.Router();
const { transferPatient,transferGet } = require('./transferController');
const { transferPatientValidationRules } = require('./transferValidator');
//transfer router:
router.post('/tpsss', transferPatientValidationRules(),transferPatient);
//transfer Get:
router.get('/transferGet', transferGet)
module.exports = router;
