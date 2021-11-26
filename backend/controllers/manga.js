const Manga = require('../models/manga');
const Chapter = require('../models/chapter');

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

const { getRequiredFields } = require('../helpers');

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
  const { term } = req.query;
  if (term) {

    Manga
      .find({ name: { $regex: term, $options: 'i' } })
      .populate(mangaPopulate)
      .exec((err, mangas) => {
        if (err) return res.status(404).json(err)

        res.json(mangas)
      })
  }
};

const getMangas = async (req, res) => {
  const manga = await Manga.find({});

  await res.json(manga);
};

const updateManga = async (req, res) => {
  const manga = Manga.findOne()
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