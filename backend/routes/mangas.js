const express = require('express');
const {
    createManga,
    getMangas,
    deleteManga,
    updateManga,
    getManga,
    getMangaBySearch
} = require('../controllers/manga');

const router = express.Router();

router.route('/')
    .get(getMangas)
    .post(createManga)
    .delete(deleteManga);

// api/mangas/search
router.get('/search', getMangaBySearch);

// api/mangas/title
router.route('/:title')
    .get(getManga)
    .put(updateManga);


module.exports = router;
