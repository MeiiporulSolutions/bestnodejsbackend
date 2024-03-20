const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');


const { addBeds, bedGet } = require('./bedController');

// POST endpoint to add beds
router.post('/addbeds', addBeds);

// GET endpoint to get all beds
router.get('/bedGet', bedGet);

module.exports = router;
