const express = require('express');
const mangaRouter = require('./mangas');
const volRouter = require('./vols');

const router = express.Router();

// api/mangas
router.use('/mangas', mangaRouter);

// api/vols
router.use('/vols', volRouter);

module.exports = router;
