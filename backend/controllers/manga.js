const Manga = require('../models/manga');
const Vol = require('../models/vol');

const createManga = async (req, res) => {
  const manga = new Manga(req.body);
  await manga
    .save()
    .then((manga) => {
      res.status(201).send(manga);
    })
    .catch((e) => {
      if (e.errors) {
        const errors = Object.keys(e.errors).reduce(
          (acc, k) => ({ ...acc, [k]: 'Обязательное поле' }),
          {}
        );

        res.status(400).json(errors);
      } else {
        res.status(400).json('Манга с таким alias уже существует');
      }
    });
};

const getManga = async (req, res) => {
  const { title } = req.params;
  const { id } = req.body;

  // Manga.findOne({ alias: title }).then((manga) => {
  //   if (manga) {
  //     res.send(manga);
  //   } else {
  //     res.status(404);
  //     res.send('Манга не найдена');
  //   }
  // });
  // Manga.find({ alias: title })
  //   .populate('vols')
  //   .exec()
  //   .then((t) => console.log(t));
  const manga = await Manga.findOne({ alias: title });

  manga.populate('vols').then((m) => res.send(m));
};

const getMangas = async (req, res) => {
  const manga = await Manga.find({});

  await res.send(manga);
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
  deleteManga,
};
