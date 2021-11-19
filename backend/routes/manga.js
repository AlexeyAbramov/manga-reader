const express = require('express');
const { createManga, getManga, deleteManga } = require('../controllers/manga');

const router = express.Router();

router
    .route('/')
    .post(createManga)
    .delete(deleteManga);

router.get('/:title', getManga);

module.exports = router;
