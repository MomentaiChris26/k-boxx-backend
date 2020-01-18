const express = require("express");
const router = express.Router();

const { index } = require("../controllers/songs_controller");

router.get("/", index);

module.exports = router;
