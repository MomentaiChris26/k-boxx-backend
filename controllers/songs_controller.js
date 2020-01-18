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

module.exports = { index };
