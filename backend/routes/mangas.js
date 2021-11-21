const express = require('express');
const { createManga, getMangas, deleteManga } = require('../controllers/manga');
const titleRouter = require('./title');

const router = express.Router();

router.route('/').get(getMangas).post(createManga).delete(deleteManga);

router.use('/:title', titleRouter);

module.exports = router;
