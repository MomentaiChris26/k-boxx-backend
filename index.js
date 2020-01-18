const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');

require("dotenv").config();

const PORT = process.env.PORT || 5500;

const dbConfig = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(process.env.DB_URL_TEST, dbConfig, err => {
  if (err) console.error("Error ❌");
  else console.log("Connected to db ✅");
});


app.use(express.json());
app.use(cors());

app.use(require('./routes/index'))


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
