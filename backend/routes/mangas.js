const express = require('express');
const { createManga, getMangas, deleteManga, getManga } = require('../controllers/manga');

const router = express.Router();

router.route('/').get(getMangas).post(createManga).delete(deleteManga);

// api/mangas/title
router.route('/:title').get(getManga);

module.exports = router;
