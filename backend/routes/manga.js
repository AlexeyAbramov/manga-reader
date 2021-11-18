const express = require('express');
const { createManga } = require('../controllers/manga');

const router = express.Router();

router.post('/', createManga);

module.exports = router;
