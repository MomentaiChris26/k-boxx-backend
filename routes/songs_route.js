const express = require("express");
const router = express.Router();

const {
  index,
  createSong,
  update
} = require("../controllers/songs_controller");

router.get("/", index);
router.post("/create", createSong);
router.put("/update", update);

module.exports = router;
