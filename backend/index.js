const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes");
const User = require("./models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use("/mangas", express.static(`${__dirname}/mangas`));

mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`,
  () => console.log("Db conneted")
);

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});

app.use(process.env.API, router);

app.post("/register", async (req, res) => {
  const { first_name, email, password } = req.body;

  if (!(first_name && email && password)) {
    return res.status(400).json("Не заполнены обязательные поля");
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res
      .status(409)
      .send(`Пользователь с почтой ${email} уже существует. Залогиньтесь`);
  }

  const enctyptPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    first_name,
    email: email.toLowerCase(),
    password: enctyptPassword,
  });

  const token = jwt.sign({ id: user._id, email }, process.env.SECRET_KEY, {
    expiresIn: "10h",
  });

  user.token = token;

  res.json(user);
});
