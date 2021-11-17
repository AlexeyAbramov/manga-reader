const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const Manga = require('./models/manga');
const Vol = require('./models/vol');
const Chapter = require('./models/chapter');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`,
  () => console.log('Db conneted')
);

const createManga = async () => {
  // const manga = new Manga({
  //   _id: mongoose.Types.ObjectId(),
  //   name: 'Магическая битва',
  //   alias: 'sorcery_fight',
  //   author: 'Акутами Гэгэ',
  //   type: 'Манга',
  //   genre: ['боевик', 'школа', 'сёнэн', 'сверхъестественное'],
  //   raiting: 4.11,
  //   status: 'Завершена',
  //   year: 2018,
  //   description:
  //     'Старшекласснику Юдзи больше не улыбается спортивная карьера: лавры героя атлетической секции уже не манят, хотя председатель студенческого совета и тренер проявляют изрядную настойчивость, чтобы записать его туда. Юноша сделал свой выбор и плевать хотел на свои выдающиеся данные и былые успехи! Оккультный клуб - вот что привлекает его внимание! Возможность прикоснуться к непознанному и тихо исследовать паранормальное. Но и здесь ему не дали покоя! Бесчинствующим на школьной территории духам (поле для регби - это святое!) не поздоровится, когда они столкнутся с этим чемпионом!',
  //   cover: '/53223.jpg',
  // });

  const manga = Manga.findOne({ raiting: 4.11 }, (err, { _id }) => {
    const vol = new Vol({
      title: 'Тайная казнь',
      manga: _id,
    });

    vol.save();
  });
};

createManga();

app.listen(process.env.PORT, () => {
  console.log(`Server run on port ${process.env.PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello world!');
});
