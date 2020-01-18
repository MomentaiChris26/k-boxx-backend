const Song = require("../models/songs");

const index = (req, res) => {
  Song.find({}),
    (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(result);
      }
    };
  return res;
};

const createSong = (req, res) => {
  const { song_name, artist, language, url } = req.body;

  const newSong = new Song({ song_name, artist, language, url });
  newSong
    .save()
    .then(() => res.status(201).json(`A new song has been added!`))
    .catch(err => res.status(400).json("Error: " + err));
};

module.exports = { index, createSong };