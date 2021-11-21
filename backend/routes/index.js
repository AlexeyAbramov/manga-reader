const express = require('express');
const mangaRouter = require('./mangas');
const volsRouter = require('./vols');
const chaptersRouter = require('./chapters');

const router = express.Router();

// api/mangas
router.use('/', mangaRouter);

module.exports = router;
