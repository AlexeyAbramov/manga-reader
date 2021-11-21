const Chapter = require('../models/chapter');

const createChapter = async (req, res) => {
  const chapter = await new Chapter(req.body);

  await chapter
    .save()
    .then((chapter) => {
      res.status(201).json(chapter);
    })
    .catch((e) => {
      res.status(400).send('Ошибка');
    });
};

module.exports = {
  createChapter,
};

Chapter.find()
  .populate('vol')
  .populate('manga')
  .exec()
  .then((chapter) => console.log('chapter', { chapter }));
