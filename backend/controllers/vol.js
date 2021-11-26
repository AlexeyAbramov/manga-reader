const { getRequiredFields } = require('../helpers');
const Vol = require('../models/vol');
const Manga = require('../models/manga');

const createVol = async (req, res) => {
  Manga
    .findOne({ _id: req.body.manga })
    .then(manga => res.send(manga))
    .catch(e => res.status(404).send('Манга не найдена'))

  const vol = await Vol.create({
    manga: '619e92bad719e848c769bf28',
    vol_number: 3
  })
  await vol.save();
};

const getVol = async (req, res) => {
  const { vol, manga } = req.query;

  console.log(req.query);
  Vol.findOne({ vol_number: vol, title: manga }).then((vol) =>
    res.status(200).json(vol)
  );
};

module.exports = {
  createVol,
  getVol,
};

// Vol.find()
//   .populate('manga')
//   .exec()
//   .then((h) => console.log(h));
