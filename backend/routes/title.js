const express = require('express');
const { getManga } = require('../controllers/manga');
const { createVol } = require('../controllers/vol');

const router = express.Router({ mergeParams: true });

router.route('/').get(getManga).post(createVol);

module.exports = router;
