const express = require('express');
const router = express.Router();
const { transferPatient,transferGet } = require('./transferController');

//transfer router:
router.post('/tpsss',transferPatient);
//transfer Get:
router.get('/transferGet', transferGet)
module.exports = router;
