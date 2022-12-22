// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const {totals} = require('../../controllers/api/apiMainController');

// /api

router
    .get('/totals', totals)

module.exports = router;
