const Manga = require('../models/manga');

const createManga = async (req, res) => {
  const manga = new Manga(req.body);
  await manga
    .save()
    .then((manga) => {
      res.status(201);
      res.send(manga);
    })
    .catch((e) => {
      res.status(400);
      res.send(e.message);
    });
};

module.exports = {
  createManga,
};
