const express = require('express');
const { getManga } = require('../controllers/manga');
const { createVol } = require('../controllers/vol');
const volRouter = require('./vols');

const router = express.Router({ mergeParams: true });

router.route('/').get(getManga).post(createVol);


//https:anime-manga.com/manga/title/1/12
router.use('/:vol', volRouter)

module.exports = router;
