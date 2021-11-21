const Vol = require('../models/vol');

const createVol = async (req, res) => {
  const vol = await new Vol(req.body);

  await vol
    .save()
    .then((vol) => {
      res.status(201).json(vol);
    })
    .catch((e) => {
      res.status(400).send('Ошибка');
    });
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
