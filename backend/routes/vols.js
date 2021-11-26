const express = require('express');
const { getVol, createVol } = require('../controllers/vol');

const router = express.Router();

router.route('/').post(createVol).get(getVol);

module.exports = router;
