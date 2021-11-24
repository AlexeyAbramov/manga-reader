const { getRequiredFields } = require('../helpers');
const Vol = require('../models/vol');
const Manga = require('../models/manga');

const createVol = async (req, res) => {
  await Vol.findOne({ vol_number: req.body.vol_number })
    .then((vol) => {
      if (!vol) {
        console.log('his');
        next(vol);
      }
      console.log('hi', vol);
    })
    .catch((e) => console.log(e.stack));
};

const getVol = async (req, res) => {
  const id = req.body.manga;
  const { vol } = req.params;

  Vol.findOne({ vol_number: vol, manga: id }).then((vol) =>
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
