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
    .put(updateManga)
    .delete(deleteManga);

// api/mangas/search
router.get('/search', getMangaBySearch)

// api/mangas/title
router.get('/:title', getManga);


module.exports = router;
