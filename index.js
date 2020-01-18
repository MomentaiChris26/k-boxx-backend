const express = require('express');
const app = express();
require('dotenv').config()


const PORT = process.env.PORT || 8888;


const dbConfig = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect("http://localhost:5500/", dbConfig, (err) => {
  if (err)
      console.error("Error ❌");
  else
      console.log("Connected to db ✅");

});

app.use(express.json());
app.use(cors());



app.listen(PORT,
  () => console.log(`Listening on port ${PORT}`)
);