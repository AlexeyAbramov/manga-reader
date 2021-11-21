const express = require('express');
const { getVol } = require('../controllers/vol');
const { createChapter } = require('../controllers/chapter');
const chapterRouter = require('./chapters');

const router = express.Router({ mergeParams: true });

router.route('/').post(createChapter).get(getVol);

router.use('/:chapter', chapterRouter);

module.exports = router;
