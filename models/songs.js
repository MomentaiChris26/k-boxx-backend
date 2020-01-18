const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("dotenv").config();

const songSchema = new Schema(
  {
    song_name: {
      type: String,
      required: true
    },
    artist: {
      type: String,
      required: true
    },
    language: {
      type: String,
      required: true
    },
    url: {
      type: String,
      require: true
    }
  },
  {
    collection: "events"
  }
);

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
