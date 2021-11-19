const Manga = require('../models/manga');

const createManga = async (req, res) => {
  const manga = new Manga(req.body);
  await manga.save()
    .then((manga) => {
      res.status(201).send(manga);
    })
    .catch((e) => {
      const errors = Object.keys(e.errors).reduce((acc, k) => ({ ...acc, [k]: 'Обязательное поле' }), {});
      
      res.status(400).json(errors);
    });
};

const getManga = async (req, res) => {
  const { title } = req.params;

  Manga.findOne({ alias: title })
    .then(manga => {
      if (manga) {
        res.send(manga)
      } else {
        res.status(404)
        res.send('Манга не найдена')
      }
    })
}

const deleteManga = async (req, res) => {

  Manga.findByIdAndDelete(req.body.id)
    .then(({ name }) => res.json(`Манга "${name}" удалена`))
    .catch(() => res.status(404).json('Манга не найдена'))
}

module.exports = {
  createManga,
  getManga,
  deleteManga
};
