const Manga = require('../models/manga');
const Chapter = require('../models/chapter');

const { getRequiredFields } = require('../helpers');

const mangaPopulate = {
  path: 'vols',
  populate: {
    path: 'chapters',
    model: Chapter,
    options: {
      sort: { 'chapter_number': 1 }
    }
  },
  options: {
    sort: { 'vol_number': 1 }
  }
};


const createManga = async (req, res) => {
  const manga = new Manga(req.body);

  await manga
    .save()
    .then((manga) => {
      res.status(201).send(manga);
    })
    .catch((e) => {
      if (e.errors) {
        const errors = getRequiredFields(e.errors);

        res.status(400).json(errors);
      } else {
        res.status(400).json('Манга с таким alias уже существует');
      }
    });
};

const getManga = async (req, res) => {
  const { title } = req.params;

  Manga
    .findOne({ alias: title })
    .populate(mangaPopulate)
    .then((manga) => {
      if (manga) {
        res.send(manga);
      } else {
        res.status(404).json('Манга не найдена');
      }
    });
};

const getMangaBySearch = async (req, res) => {
  const term = req.query.term;
  const limit = 50;

  if (!term) return res.status(404).json('Поле search пустое')

  Manga
    .find({ name: { $regex: term, $options: 'i' } }, 'name cover')
    .limit(limit)
    .exec((err, mangas) => {
      if (err) return res.status(404).json(err)

      res.json(mangas)
    })
};

const getMangas = async (req, res) => {
  const manga = await Manga.find({});

  await res.json(manga);
};

const updateManga = async (req, res) => {
  const id = req.body.id;

  // Manga.findByIdAndUpdate(id, { $set: {} }, (err, manga) => {
  //   console.log(manga)
  // })
};

const deleteManga = async (req, res) => {
  Manga.findByIdAndDelete(req.body.id)
    .then(({ name }) => res.send(`Манга "${name}" удалена`))
    .catch(() => res.status(404).json('Манга не найдена'));
};

module.exports = {
  createManga,
  getManga,
  getMangas,
  getMangaBySearch,
  updateManga,
  deleteManga,
};