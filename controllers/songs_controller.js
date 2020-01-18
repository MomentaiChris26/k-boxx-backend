const Song = require("../models/songs");

const index = (req, res) => {
  Song.find({}, (err, result) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(result);
    }
  });
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

const update = async (req, res) => {
  const { _id, song_name, artist, language, url } = req.body;

  res = await Song.updateOne(
    { _id: _id },
    { song_name, artist, language, url },
    (err, result) => {
      if (err) {
        res.status(400).json(err);
      }

      if (result.n > 0) {
        res.status(200).json(result);
      } else {
        res.status(400).json(result);
      }
    }
  ).catch(err => res.status(400).json(err));
  return res;
};

module.exports = { index, createSong, update };
