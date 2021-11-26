const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`,
  () => console.log('Db conneted')
);

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use('/api', router);
